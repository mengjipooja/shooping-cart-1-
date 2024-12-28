import React from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/Layout/UserMenu'

const Orders = () => {
  return (
    <Layout title={"yours Orders"}>
      <div className='container-flui p-3 m-3'>
      <div className='row'>
        
        <div className='col-md-3'>
            
            <UserMenu />
        </div>
       
        </div>
      </div>
      <h1> your order</h1>
    </Layout>
  )
}

export default Orders
