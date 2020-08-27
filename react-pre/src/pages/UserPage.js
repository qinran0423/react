import React, { Component } from 'react'
import Layout from './Layout'

export default class UserPage extends Component {
  render() {
    return (
      <Layout showTop={true} showBottom={true} title="用户中心">
        <div>
          <h3>用户中心</h3>
        </div>
      </Layout>
    )
  }
}
