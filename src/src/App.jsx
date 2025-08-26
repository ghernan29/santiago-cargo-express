import React, { useState } from 'react';
import { Package, FileText, TrendingUp, Upload, Plus, Search, Edit3, Trash2, Eye, Download, BarChart3, DollarSign, AlertTriangle, CheckCircle, Calendar, MapPin, Clock, Users, Settings, Database, Smartphone, Monitor, MessageSquare, Camera, Send } from 'lucide-react';

const App = () => {
  const [activeModule, setActiveModule] = useState('dashboard');
  const [searchTerm, setSearchTerm] = useState('');
  const [currency, setCurrency] = useState('USD');

  // Real Santiago Cargo Express data
  const shipments = [
    { 
      id: 1, 
      trackingNumber: 'CONF-033927-2Y10', 
      cargoDescription: 'Envío de cajas - Cliente Gianny Hernandez', 
      category: 'Envío general', 
      weight: '1 caja estándar', 
      value: 25.00, 
      consignee: 'Gianny Hernandez',
      destination: '2863 Bainbridge Ave Apt 6L Bronx, NY 10458',
      status: 'Programado', 
      pickupDate: 'Agosto 25, 2025',
      phone: '3478052300',
      preferredTime: '12:00:00 PM'
    },
    { 
      id: 2, 
      trackingNumber: 'CONF-847363-GMDG', 
      cargoDescription: 'Envío de cajas - Cliente Gianny Hernandez', 
      category: 'Envío de cajas', 
      weight: '3 cajas estándar', 
      value: 75.00, 
      consignee: 'Gianny Hernandez',
      destination: '2863 Bainbridge Ave Apt 6L Bronx, NY 10458',
      status: 'Entregado', 
      pickupDate: 'Agosto 22, 2025',
      phone: '3478052300',
      preferredTime: '7:00:00 AM'
    }
  ];

  const customers = [
    {
      id: 1,
      name: 'Gianny Hernandez',
      phone: '+1-347-805-2300',
      address: '2863 Bainbridge Ave Apt 6L, Bronx, NY 10458',
      status: 'VIP',
      totalShipments: 15,
      totalSpent: 1125.00
    }
  ];

  const formatCurrency = (amount) => {
    if (currency === 'DOP') {
      return `RD$${(amount * 58.5).toLocaleString()}`;
    }
    return `$${amount.toLocaleString()}`;
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">Santiago Cargo Express - Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Total Envíos</p>
              <p className="text-2xl font-bold">{shipments.length}</p>
            </div>
            <Package className="h-8 w-8 text-blue-200" />
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Ingresos</p>
              <p className="text-2xl font-bold">{formatCurrency(shipments.reduce((sum, s) => sum + s.value, 0))}</p>
            </div>
            <DollarSign className="h-8 w-8 text-green-200" />
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-yellow-100 text-sm">En Tránsito</p>
              <p className="text-2xl font-bold">{shipments.filter(s => s.status === 'En tránsito').length}</p>
            </div>
            <TrendingUp className="h-8 w-8 text-yellow-200" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">Clientes</p>
              <p className="text-2xl font-bold">{customers.length}</p>
            </div>
            <Users className="h-8 w-8 text-purple-200" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Envíos Recientes</h3>
        <div className="space-y-3">
          {shipments.map(shipment => (
            <div key={shipment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">{shipment.trackingNumber}</p>
                <p className="text-sm text-gray-600">{shipment.consignee}</p>
                <p className="text-xs text-gray-500">{shipment.destination}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-green-600">{formatCurrency(shipment.value)}</p>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  shipment.status === 'Entregado' ? 'bg-green-100 text-green-800' :
                  shipment.status === 'En tránsito' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {shipment.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderShipments = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Gestión de Envíos</h2>
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="space-y-4">
          {shipments.map(shipment => (
            <div key={shipment.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-blue-600">{shipment.trackingNumber}</h3>
                  <p className="text-sm text-gray-600">{shipment.cargoDescription}</p>
                  <p className="text-xs text-gray-500">{shipment.destination}</p>
                  <p className="text-xs text-gray-500">Tel: {shipment.phone}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-600">{formatCurrency(shipment.value)}</p>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    shipment.status === 'Entregado' ? 'bg-green-100 text-green-800' :
                    shipment.status === 'En tránsito' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {shipment.status}
                  </span>
                  <p className="text-xs text-gray-500 mt-1">{shipment.preferredTime}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCustomers = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Gestión de Clientes</h2>
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="space-y-4">
          {customers.map(customer => (
            <div key={customer.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">{customer.name}</h3>
                  <p className="text-sm text-gray-600">{customer.phone}</p>
                  <p className="text-sm text-gray-600">{customer.address}</p>
                </div>
                <div className="text-right">
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">{customer.status}</span>
                  <p className="text-sm font-bold text-green-600">{formatCurrency(customer.totalSpent)}</p>
                  <p className="text-xs text-gray-500">{customer.totalShipments} envíos</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTracking = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Portal de Seguimiento</h2>
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Buscar Paquete</h3>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Ingresa número de confirmación (ej: CONF-033927-2Y10)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
              Buscar
            </button>
          </div>
        </div>

        {searchTerm && (
          <div className="space-y-4">
            {shipments.filter(s => s.trackingNumber.toLowerCase().includes(searchTerm.toLowerCase())).map(shipment => (
              <div key={shipment.id} className="border-2 border-blue-200 rounded-lg p-4 bg-blue-50">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-blue-600">{shipment.trackingNumber}</h4>
                    <p className="text-gray-600">{shipment.cargoDescription}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    shipment.status === 'Entregado' ? 'bg-green-100 text-green-800' :
                    shipment.status === 'En tránsito' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {shipment.status}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-700">Destinatario:</p>
                    <p className="text-gray-900">{shipment.consignee}</p>
                    <p className="text-sm text-gray-600">{shipment.destination}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Detalles del Envío:</p>
                    <p className="text-gray-900">Valor: {formatCurrency(shipment.value)}</p>
                    <p className="text-gray-900">Peso: {shipment.weight}</p>
                    <p className="text-gray-900">Fecha estimada: {shipment.pickupDate}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Package className="h-8 w-8 text-blue-600" />
              <h1 className="ml-3 text-xl font-bold text-gray-900">Santiago Cargo Express</h1>
            </div>
            <div className="flex items-center space-x-4">
              <select 
                value={currency} 
                onChange={(e) => setCurrency(e.target.value)}
                className="px-3 py-1 border border-gray-300 rounded text-sm"
              >
                <option value="USD">USD ($)</option>
                <option value="DOP">DOP (RD$)</option>
              </select>
              <span className="text-sm text-gray-700">Sistema en Línea</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        <nav className="w-64 bg-white shadow-lg min-h-screen">
          <div className="p-6">
            <ul className="space-y-2">
              {[
                { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
                { id: 'shipments', label: 'Envíos', icon: Package },
                { id: 'customers', label: 'Clientes', icon: Users },
                { id: 'tracking', label: 'Seguimiento', icon: MapPin }
              ].map((item) => {
                const IconComponent = item.icon;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => setActiveModule(item.id)}
                      className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all ${
                        activeModule === item.id
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <IconComponent className="mr-3 h-5 w-5" />
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>

        <main className="flex-1 p-8">
          {activeModule === 'dashboard' && renderDashboard()}
          {activeModule === 'shipments' && renderShipments()}
          {activeModule === 'customers' && renderCustomers()}
          {activeModule === 'tracking' && renderTracking()}
        </main>
      </div>
    </div>
  );
};

export default App;
