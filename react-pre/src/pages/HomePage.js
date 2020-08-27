import React, { Component } from 'react'
import Layout from './Layout'

export default class HomePage extends Component {
  render() {
    return (
      <Layout showTop={false} showBottom={true} title="商城首页">
        {
          {
            context: (
              <div>
                <h3>HomePage</h3>
              </div>
            ),
            txt: '我是一个文本',
            onClick: () => {
              console.log('onclick')
            }
          }
        }
      </Layout>
    )
  }
}
