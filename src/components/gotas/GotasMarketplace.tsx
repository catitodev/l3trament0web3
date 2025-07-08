import React, { useState } from 'react';
import { GotasMarketplace as GotasMarketplaceType, MarketplaceItem, User } from '../../types/journey';
import { ShoppingCart, Zap, Trophy, Users, Calendar, Package, Star, Gift, Clock } from 'lucide-react';

interface GotasMarketplaceProps {
  marketplace: GotasMarketplaceType;
  user: User;
  onPurchase: (itemId: string) => void;
}

const GotasMarketplace: React.FC<GotasMarketplaceProps> = ({
  marketplace,
  user,
  onPurchase
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'nft' | 'access' | 'events' | 'physical'>('all');
  const [selectedItem, setSelectedItem] = useState<MarketplaceItem | null>(null);

  const categories = [
    { id: 'all', name: 'Todos', icon: ShoppingCart },
    { id: 'nft', name: 'NFTs', icon: Star },
    { id: 'access', name: 'Acesso', icon: Trophy },
    { id: 'events', name: 'Eventos', icon: Calendar },
    { id: 'physical', name: 'Físicos', icon: Package },
  ];

  const getAllItems = (): MarketplaceItem[] => {
    return [
      ...marketplace.nfts,
      ...marketplace.access,
      ...marketplace.events,
      ...marketplace.physical,
    ];
  };

  const getFilteredItems = (): MarketplaceItem[] => {
    if (selectedCategory === 'all') return getAllItems();
    return getAllItems().filter(item => item.category === selectedCategory);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'nft': return <Star className="w-5 h-5" />;
      case 'access': return <Trophy className="w-5 h-5" />;
      case 'mentorship': return <Users className="w-5 h-5" />;
      case 'event': return <Calendar className="w-5 h-5" />;
      case 'physical': return <Package className="w-5 h-5" />;
      default: return <Gift className="w-5 h-5" />;
    }
  };

  const canAfford = (item: MarketplaceItem) => {
    return user.profile.gotasBalance >= item.cost;
  };

  const isTimeExpired = (item: MarketplaceItem) => {
    return item.timeLimit && item.timeLimit < new Date();
  };

  const isOutOfStock = (item: MarketplaceItem) => {
    return item.remaining !== undefined && item.remaining <= 0;
  };

  const handlePurchase = (item: MarketplaceItem) => {
    if (!canAfford(item) || isTimeExpired(item) || isOutOfStock(item)) return;
    onPurchase(item.id);
  };

  return (
    <div className="max-w-7xl mx-auto p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-white">Marketplace de Gotas</h1>
          <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 px-4 py-2 rounded-full border border-yellow-500/30">
            <Zap className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-300 font-semibold">
              {user.profile.gotasBalance.toLocaleString()} gotas
            </span>
          </div>
        </div>
        
        {/* Filtros de Categoria */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map(category => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 whitespace-nowrap ${
                  selectedCategory === category.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid de Itens */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {getFilteredItems().map(item => (
          <div
            key={item.id}
            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 shadow-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 cursor-pointer"
            onClick={() => setSelectedItem(item)}
          >
            {/* Imagem do Item */}
            <div className="aspect-square bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl mb-4 flex items-center justify-center">
              {item.image ? (
                <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-xl" />
              ) : (
                <div className="text-white text-4xl">
                  {getCategoryIcon(item.category)}
                </div>
              )}
            </div>

            {/* Informações do Item */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">{item.name}</h3>
                <div className="flex items-center gap-1 text-yellow-400">
                  <Zap className="w-4 h-4" />
                  <span className="font-semibold">{item.cost}</span>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm">{item.description}</p>
              
              {/* Metadados do Item */}
              <div className="flex items-center gap-4 text-xs text-gray-400">
                <div className="flex items-center gap-1">
                  {getCategoryIcon(item.category)}
                  <span className="capitalize">{item.category}</span>
                </div>
                
                {item.quantity && (
                  <div className="flex items-center gap-1">
                    <Package className="w-3 h-3" />
                    <span>{item.remaining}/{item.quantity}</span>
                  </div>
                )}
                
                {item.timeLimit && (
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{item.timeLimit.toLocaleDateString()}</span>
                  </div>
                )}
              </div>

              {/* Status do Item */}
              <div className="flex items-center gap-2">
                {!canAfford(item) && (
                  <span className="text-red-400 text-sm">Gotas insuficientes</span>
                )}
                {isTimeExpired(item) && (
                  <span className="text-red-400 text-sm">Expirado</span>
                )}
                {isOutOfStock(item) && (
                  <span className="text-red-400 text-sm">Esgotado</span>
                )}
                {item.available && canAfford(item) && !isTimeExpired(item) && !isOutOfStock(item) && (
                  <span className="text-green-400 text-sm">Disponível</span>
                )}
              </div>

              {/* Botão de Compra */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePurchase(item);
                }}
                disabled={!canAfford(item) || isTimeExpired(item) || isOutOfStock(item) || !item.available}
                className={`w-full py-3 px-4 rounded-xl font-medium transition-all duration-200 ${
                  canAfford(item) && item.available && !isTimeExpired(item) && !isOutOfStock(item)
                    ? 'bg-purple-600 hover:bg-purple-700 text-white'
                    : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                }`}
              >
                {!canAfford(item) 
                  ? 'Gotas insuficientes' 
                  : isTimeExpired(item) 
                    ? 'Expirado' 
                    : isOutOfStock(item) 
                      ? 'Esgotado' 
                      : 'Comprar'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de Detalhes do Item */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 max-w-md w-full border border-purple-500/20">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">{selectedItem.name}</h2>
              <button
                onClick={() => setSelectedItem(null)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            
            {/* Imagem Grande */}
            <div className="aspect-square bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl mb-6 flex items-center justify-center">
              {selectedItem.image ? (
                <img src={selectedItem.image} alt={selectedItem.name} className="w-full h-full object-cover rounded-xl" />
              ) : (
                <div className="text-white text-6xl">
                  {getCategoryIcon(selectedItem.category)}
                </div>
              )}
            </div>

            {/* Descrição Detalhada */}
            <p className="text-gray-300 mb-6">{selectedItem.description}</p>

            {/* Informações Detalhadas */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Preço:</span>
                <div className="flex items-center gap-1 text-yellow-400">
                  <Zap className="w-4 h-4" />
                  <span className="font-semibold">{selectedItem.cost} gotas</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Categoria:</span>
                <div className="flex items-center gap-1 text-purple-400">
                  {getCategoryIcon(selectedItem.category)}
                  <span className="capitalize">{selectedItem.category}</span>
                </div>
              </div>
              
              {selectedItem.quantity && (
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Disponível:</span>
                  <span className="text-white">{selectedItem.remaining}/{selectedItem.quantity}</span>
                </div>
              )}
              
              {selectedItem.timeLimit && (
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Válido até:</span>
                  <span className="text-white">{selectedItem.timeLimit.toLocaleDateString()}</span>
                </div>
              )}
            </div>

            {/* Botão de Compra */}
            <button
              onClick={() => {
                handlePurchase(selectedItem);
                setSelectedItem(null);
              }}
              disabled={!canAfford(selectedItem) || isTimeExpired(selectedItem) || isOutOfStock(selectedItem) || !selectedItem.available}
              className={`w-full py-4 px-6 rounded-xl font-medium transition-all duration-200 ${
                canAfford(selectedItem) && selectedItem.available && !isTimeExpired(selectedItem) && !isOutOfStock(selectedItem)
                  ? 'bg-purple-600 hover:bg-purple-700 text-white'
                  : 'bg-gray-700 text-gray-400 cursor-not-allowed'
              }`}
            >
              {!canAfford(selectedItem) 
                ? 'Gotas insuficientes' 
                : isTimeExpired(selectedItem) 
                  ? 'Expirado' 
                  : isOutOfStock(selectedItem) 
                    ? 'Esgotado' 
                    : 'Confirmar Compra'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GotasMarketplace;