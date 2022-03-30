import styled from 'styled-components'

export default function Header({ title }) {
  return (
    <>
      <style jsx>{`
        h1 {
          font-size: 56px;
          font-weight: 700;
          letter-spacing: -0.033em;
        }  
      `}</style>
      <h1>{title}</h1>
    </>
  )
}