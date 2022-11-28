import React from 'react'
import Lottie from 'lottie-react'
import styled from 'styled-components'
import Loading from '../../src/assets/loader.json'

const Loader = () => {
  return (
        <ContentLoader>
            <Lottie animationData={Loading} />
        </ContentLoader>
  )
}

const ContentLoader = styled.div`
    display: flex;
    justify-content: center;
`

export default Loader