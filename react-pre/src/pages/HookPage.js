import React, { useState, useEffect } from 'react'

export default function HookPage() {
  const [count, setCount] = useState(0)
  const [date, setDate] = useState(new Date())
  //  和didMount, didUpdate类似
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date() )
    }, 1000)
    // 清楚定时器 类似Willunmount
    return () => clearInterval(timer)
  }, [])
  useEffect(() => {
    console.log('effect')
    document.title = `点击了${count}次`;
  }, [count])
  return (
    <div>
      <h3>HookPage</h3>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
      <p>{useClock().toLocaleTimeString()}</p>
    </div>
  )
}


// 自定义hook,命名要以use开头
function useClock() {
  const [date, setDate] = useState(new Date())
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date() )
    }, 1000)
    // 清楚定时器 类似Willunmount
    return () => clearInterval(timer)
  }, [])
  return date
}