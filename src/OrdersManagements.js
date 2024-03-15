import React, { useState, useEffect } from 'react';

const OrdersManagement = () => {
 // Simulate orders data
 const initialOrders = [
    { id: 1, customerName: 'John Doe', orderDate: '2023-04-01', status: 'Pending' },
    { id: 2, customerName: 'Jayesh', orderDate: '2024-23-06', status: 'Completed' },
    { id: 3, customerName: 'Davide', orderDate: '2024-07-02', status: 'Completed' },
    { id: 4, customerName: 'Ben Stocks', orderDate: '2024-04-08', status: 'Completed' },
    { id: 5, customerName: 'Jos Buttler', orderDate: '2023-07-09', status: 'Completed' },

    // Add more orders as needed
 ];

 const [orders, setOrders] = useState(initialOrders);
 const [selectedOrder, setSelectedOrder] = useState(null);

 useEffect(() => {
    // Simulate fetching orders from an API
    setOrders(initialOrders);
 }, []);

 const handleDelete = (orderId) => {
    setOrders(orders.filter(order => order.id !== orderId));
 };

 const handleStatusUpdate = (orderId, newStatus) => {
    setOrders(orders.map(order => order.id === orderId ? { ...order, status: newStatus } : order));
 };

 return (
    <div >
      <h2>Orders Management</h2>
      <ul  className='ulorders'>
        {orders.map((order) => (
          <li key={order.id}  className='orders'>
            Order ID: {order.id} - Customer: {order.customerName} - Date: {order.orderDate} - Status: {order.status}
            <button onClick={() => setSelectedOrder(order)}>View Details</button>
            <button onClick={() => handleDelete(order.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {selectedOrder && (
        <div>
          <h2>Order Details</h2>
          <p>ID: {selectedOrder.id}</p>
          <p>Customer: {selectedOrder.customerName}</p>
          <p>Date: {selectedOrder.orderDate}</p>
          <p>Status: {selectedOrder.status}</p>
          <button onClick={() => handleStatusUpdate(selectedOrder.id, 'Completed')}>Mark as Completed</button>
          <button onClick={() => handleStatusUpdate(selectedOrder.id, 'Pending')}>Mark as Pending</button>
          <button onClick={() => handleStatusUpdate(selectedOrder.id, 'Shipped')}>Mark as Shipped</button>
          <button onClick={() => setSelectedOrder(null)}>Close Details</button>
        </div>
      )}
    </div>
    
 );
};

export default OrdersManagement;
