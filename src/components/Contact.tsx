import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, PackageOpen, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset form status after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };
  
  return (
    <section id="contato" className="section bg-white">
      <div className="container">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-secondary-800 mb-4">Vamos conversar?</h2>
          <div className="w-16 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Quer contratar a CalangoFlux ou propor uma parceria?
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6">Entre em contato conosco</h3>
            
            <div className="space-y-6">
              <a 
                href="https://wa.me/5522988324416" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition"
              >
                <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 text-primary-600">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">WhatsApp</h4>
                  <p className="text-gray-600">Resposta rápida em horário comercial</p>
                </div>
              </a>
              
              <a 
                href="https://discord.gg/NjJeB285" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-secondary-50 transition"
              >
                <div className="bg-secondary-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 text-secondary-600">
                  <PackageOpen size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Discord</h4>
                  <p className="text-gray-600">Conheça nossa comunidade</p>
                </div>
              </a>
              
              <a 
                href="https://t.me/+Uh2Uc5-lNogxMDJh" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-accent-50 transition"
              >
                <div className="bg-accent-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 text-accent-600">
                  <Send size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Telegram</h4>
                  <p className="text-gray-600">Converse com nossa equipe</p>
                </div>
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-6">Formulário de Contato</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
                    placeholder="seu.email@exemplo.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
                    placeholder="Como podemos ajudar?"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full btn btn-primary"
                >
                  {formStatus === 'submitting' ? 'Enviando...' : 'Enviar mensagem'}
                </button>
                
                {formStatus === 'success' && (
                  <div className="bg-green-100 text-green-700 p-3 rounded-lg text-center">
                    Mensagem enviada com sucesso! Entraremos em contato em breve.
                  </div>
                )}
                
                {formStatus === 'error' && (
                  <div className="bg-red-100 text-red-700 p-3 rounded-lg text-center">
                    Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.
                  </div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
