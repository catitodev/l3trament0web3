-- ==============================================
-- L3TRAMENT0WEB3 - SUPABASE DATABASE SETUP
-- ==============================================

-- Criar tabelas principais
-- ==============================================

-- 1. BLOCOS DE CONTEÚDO
CREATE TABLE blocos (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descricao TEXT,
    ordem INTEGER NOT NULL,
    ativo BOOLEAN DEFAULT true,
    markdown_content TEXT,
    xp_reward INTEGER DEFAULT 100,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. SEÇÕES DENTRO DOS BLOCOS
CREATE TABLE secoes (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    bloco_id UUID REFERENCES blocos(id) ON DELETE CASCADE,
    titulo VARCHAR(255) NOT NULL,
    conteudo_markdown TEXT,
    ordem INTEGER NOT NULL,
    tipo VARCHAR(50) DEFAULT 'conteudo', -- 'conteudo', 'exercicio', 'reflexao', 'video', 'recurso'
    recursos_extras JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. USUÁRIOS (PERFIS)
CREATE TABLE user_profiles (
    id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    username VARCHAR(50) UNIQUE,
    email VARCHAR(255),
    nome_completo VARCHAR(255),
    perfil_exploratorio VARCHAR(50), -- 'regenerativo', 'comunitario', 'inovador', 'estrategico', 'netweaver'
    xp_total INTEGER DEFAULT 0,
    level INTEGER DEFAULT 1,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. PROGRESSO DOS USUÁRIOS
CREATE TABLE user_progress (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES user_profiles(id) ON DELETE CASCADE,
    bloco_id UUID REFERENCES blocos(id) ON DELETE CASCADE,
    secao_id UUID REFERENCES secoes(id) ON DELETE CASCADE,
    completed BOOLEAN DEFAULT false,
    xp_earned INTEGER DEFAULT 0,
    completed_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, bloco_id, secao_id)
);

-- 5. RELATÓRIOS/REFLEXÕES
CREATE TABLE user_reports (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES user_profiles(id) ON DELETE CASCADE,
    bloco_id UUID REFERENCES blocos(id) ON DELETE CASCADE,
    conteudo TEXT NOT NULL,
    reflexoes JSONB,
    perfil_exploratorio VARCHAR(50),
    aprovado BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 6. CONQUISTAS
CREATE TABLE achievements (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    descricao TEXT,
    icone VARCHAR(100),
    xp_required INTEGER,
    tipo VARCHAR(50), -- 'bloco', 'xp', 'streak', 'especial'
    condicoes JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 7. CONQUISTAS DOS USUÁRIOS
CREATE TABLE user_achievements (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES user_profiles(id) ON DELETE CASCADE,
    achievement_id UUID REFERENCES achievements(id) ON DELETE CASCADE,
    earned_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, achievement_id)
);

-- ==============================================
-- ÍNDICES PARA PERFORMANCE
-- ==============================================

-- Índices para consultas frequentes
CREATE INDEX idx_user_progress_user_id ON user_progress(user_id);
CREATE INDEX idx_user_progress_bloco_id ON user_progress(bloco_id);
CREATE INDEX idx_user_progress_completed ON user_progress(completed);
CREATE INDEX idx_secoes_bloco_id ON secoes(bloco_id);
CREATE INDEX idx_secoes_ordem ON secoes(ordem);
CREATE INDEX idx_user_reports_user_id ON user_reports(user_id);
CREATE INDEX idx_user_reports_bloco_id ON user_reports(bloco_id);
CREATE INDEX idx_user_reports_aprovado ON user_reports(aprovado);
CREATE INDEX idx_blocos_ordem ON blocos(ordem);
CREATE INDEX idx_blocos_ativo ON blocos(ativo);
CREATE INDEX idx_user_achievements_user_id ON user_achievements(user_id);
CREATE INDEX idx_user_profiles_perfil ON user_profiles(perfil_exploratorio);

-- ==============================================
-- ROW LEVEL SECURITY (RLS)
-- ==============================================

-- Habilitar RLS nas tabelas
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_achievements ENABLE ROW LEVEL SECURITY;

-- Políticas de segurança para user_profiles
CREATE POLICY "Users can view own profile" ON user_profiles
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON user_profiles
    FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON user_profiles
    FOR INSERT WITH CHECK (auth.uid() = id);

-- Políticas de segurança para user_progress
CREATE POLICY "Users can view own progress" ON user_progress
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own progress" ON user_progress
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own progress" ON user_progress
    FOR UPDATE USING (auth.uid() = user_id);

-- Políticas de segurança para user_reports
CREATE POLICY "Users can view own reports" ON user_reports
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own reports" ON user_reports
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own reports" ON user_reports
    FOR UPDATE USING (auth.uid() = user_id);

-- Políticas de segurança para user_achievements
CREATE POLICY "Users can view own achievements" ON user_achievements
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own achievements" ON user_achievements
    FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Políticas para tabelas públicas (apenas leitura)
CREATE POLICY "Anyone can view active blocos" ON blocos
    FOR SELECT USING (ativo = true);

CREATE POLICY "Anyone can view secoes" ON secoes
    FOR SELECT USING (true);

CREATE POLICY "Anyone can view achievements" ON achievements
    FOR SELECT USING (true);

-- ==============================================
-- FUNÇÕES UTILITÁRIAS
-- ==============================================

-- Função para atualizar XP do usuário
CREATE OR REPLACE FUNCTION update_user_xp(user_id UUID, xp_to_add INTEGER)
RETURNS void AS $$
BEGIN
    UPDATE user_profiles 
    SET 
        xp_total = xp_total + xp_to_add,
        level = CASE 
            WHEN (xp_total + xp_to_add) >= 1000 THEN 5
            WHEN (xp_total + xp_to_add) >= 500 THEN 4
            WHEN (xp_total + xp_to_add) >= 250 THEN 3
            WHEN (xp_total + xp_to_add) >= 100 THEN 2
            ELSE 1
        END,
        updated_at = NOW()
    WHERE id = user_id;
END;
$$ LANGUAGE plpgsql;

-- Função para calcular progresso do usuário
CREATE OR REPLACE FUNCTION get_user_progress_percentage(user_id UUID)
RETURNS INTEGER AS $$
DECLARE
    total_secoes INTEGER;
    completed_secoes INTEGER;
    percentage INTEGER;
BEGIN
    -- Conta total de seções ativas
    SELECT COUNT(*) INTO total_secoes
    FROM secoes s
    JOIN blocos b ON s.bloco_id = b.id
    WHERE b.ativo = true;
    
    -- Conta seções completadas pelo usuário
    SELECT COUNT(*) INTO completed_secoes
    FROM user_progress up
    JOIN secoes s ON up.secao_id = s.id
    JOIN blocos b ON s.bloco_id = b.id
    WHERE up.user_id = get_user_progress_percentage.user_id
    AND up.completed = true
    AND b.ativo = true;
    
    -- Calcula porcentagem
    IF total_secoes > 0 THEN
        percentage := (completed_secoes * 100) / total_secoes;
    ELSE
        percentage := 0;
    END IF;
    
    RETURN percentage;
END;
$$ LANGUAGE plpgsql;

-- Função para verificar se usuário pode acessar próximo bloco
CREATE OR REPLACE FUNCTION can_access_next_block(user_id UUID, bloco_ordem INTEGER)
RETURNS BOOLEAN AS $$
DECLARE
    previous_block_completed BOOLEAN := false;
    has_report BOOLEAN := false;
BEGIN
    -- Se é o primeiro bloco, sempre pode acessar
    IF bloco_ordem = 1 THEN
        RETURN true;
    END IF;
    
    -- Verifica se completou o bloco anterior
    SELECT EXISTS(
        SELECT 1 FROM user_progress up
        JOIN blocos b ON up.bloco_id = b.id
        WHERE up.user_id = can_access_next_block.user_id
        AND b.ordem = bloco_ordem - 1
        AND up.completed = true
    ) INTO previous_block_completed;
    
    -- Verifica se tem relatório aprovado do bloco anterior
    SELECT EXISTS(
        SELECT 1 FROM user_reports ur
        JOIN blocos b ON ur.bloco_id = b.id
        WHERE ur.user_id = can_access_next_block.user_id
        AND b.ordem = bloco_ordem - 1
        AND ur.aprovado = true
    ) INTO has_report;
    
    RETURN previous_block_completed AND has_report;
END;
$$ LANGUAGE plpgsql;

-- ==============================================
-- TRIGGERS
-- ==============================================

-- Trigger para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Aplicar trigger nas tabelas que precisam
CREATE TRIGGER update_blocos_updated_at
    BEFORE UPDATE ON blocos
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_secoes_updated_at
    BEFORE UPDATE ON secoes
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_user_profiles_updated_at
    BEFORE UPDATE ON user_profiles
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_user_reports_updated_at
    BEFORE UPDATE ON user_reports
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- ==============================================
-- DADOS INICIAIS
-- ==============================================

-- Inserir conquistas básicas
INSERT INTO achievements (nome, descricao, icone, xp_required, tipo) VALUES
('Primeiro Passo', 'Completou o primeiro bloco do L3trament0Web3', '🎯', 100, 'bloco'),
('Explorador Digital', 'Acumulou 500 XP na jornada', '🚀', 500, 'xp'),
('Regenerativo', 'Completou trilha com perfil regenerativo', '🌱', 0, 'especial'),
('Comunitário', 'Completou trilha com perfil comunitário', '🤝', 0, 'especial'),
('Inovador', 'Completou trilha com perfil inovador', '💡', 0, 'especial'),
('Estratégico', 'Completou trilha com perfil estratégico', '🎯', 0, 'especial'),
('Netweaver', 'Completou trilha como netweaver', '🌐', 0, 'especial'),
('Persistente', 'Completou 5 blocos consecutivos', '⭐', 0, 'streak'),
('Mestre Web3', 'Completou todos os blocos disponíveis', '🏆', 0, 'especial'),
('Reflexivo', 'Enviou 10 relatórios de qualidade', '📝', 0, 'especial');

-- Inserir bloco inicial (será substituído pelos dados do HackMD)
INSERT INTO blocos (titulo, descricao, ordem, markdown_content, xp_reward) VALUES
('Protagonismo Regenerativo', 'Primeiro bloco da trilha de letramento digital regenerativo', 1, 
'# Protagonismo Regenerativo

## Bem-vindo à sua jornada Web3!

Este é o início da sua transformação digital regenerativa.

### O que você vai aprender:
- Fundamentos da Web3
- Protagonismo digital
- Impacto regenerativo
- Comunidades descentralizadas

### Preparado para começar?
Vamos explorar juntos este novo mundo de possibilidades!', 100);

-- ==============================================
-- VIEWS ÚTEIS
-- ==============================================

-- View para estatísticas gerais
CREATE VIEW stats_overview AS
SELECT 
    (SELECT COUNT(*) FROM user_profiles) as total_users,
    (SELECT COUNT(*) FROM blocos WHERE ativo = true) as total_blocos,
    (SELECT COUNT(*) FROM user_progress WHERE completed = true) as total_completions,
    (SELECT COUNT(*) FROM user_reports) as total_reports,
    (SELECT COUNT(*) FROM user_achievements) as total_achievements_earned;

-- View para progresso detalhado dos usuários
CREATE VIEW user_progress_detailed AS
SELECT 
    up.user_id,
    u.nome_completo,
    u.username,
    u.perfil_exploratorio,
    u.xp_total,
    u.level,
    b.titulo as bloco_titulo,
    b.ordem as bloco_ordem,
    s.titulo as secao_titulo,
    s.ordem as secao_ordem,
    up.completed,
    up.xp_earned,
    up.completed_at
FROM user_progress up
JOIN user_profiles u ON up.user_id = u.id
JOIN blocos b ON up.bloco_id = b.id
LEFT JOIN secoes s ON up.secao_id = s.id
ORDER BY u.nome_completo, b.ordem, s.ordem;

-- View para ranking de usuários
CREATE VIEW user_ranking AS
SELECT 
    u.id,
    u.nome_completo,
    u.username,
    u.perfil_exploratorio,
    u.xp_total,
    u.level,
    COUNT(up.id) as total_completions,
    COUNT(ur.id) as total_reports,
    COUNT(ua.id) as total_achievements,
    ROW_NUMBER() OVER (ORDER BY u.xp_total DESC) as ranking
FROM user_profiles u
LEFT JOIN user_progress up ON u.id = up.user_id AND up.completed = true
LEFT JOIN user_reports ur ON u.id = ur.user_id
LEFT JOIN user_achievements ua ON u.id = ua.user_id
GROUP BY u.id, u.nome_completo, u.username, u.perfil_exploratorio, u.xp_total, u.level
ORDER BY u.xp_total DESC;

-- ==============================================
-- COMENTÁRIOS FINAIS
-- ==============================================

-- Este script configura completamente o banco de dados para o L3trament0Web3
-- Inclui todas as tabelas, índices, políticas de segurança, funções e dados iniciais
-- Para usar: execute este script no SQL Editor do Supabase

-- Próximos passos:
-- 1. Configure as variáveis de ambiente no seu projeto
-- 2. Teste a conexão com o Supabase
-- 3. Configure os mapeamentos do HackMD
-- 4. Importe o conteúdo dos seus documentos

COMMENT ON TABLE blocos IS 'Blocos de conteúdo da trilha de letramento';
COMMENT ON TABLE secoes IS 'Seções dentro de cada bloco';
COMMENT ON TABLE user_profiles IS 'Perfis dos usuários com informações de gamificação';
COMMENT ON TABLE user_progress IS 'Progresso dos usuários nos blocos e seções';
COMMENT ON TABLE user_reports IS 'Relatórios e reflexões dos usuários';
COMMENT ON TABLE achievements IS 'Conquistas disponíveis no sistema';
COMMENT ON TABLE user_achievements IS 'Conquistas obtidas pelos usuários';