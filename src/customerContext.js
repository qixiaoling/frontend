import React from 'react'

const ConsumerContext = React.createContext();
const ConsumerProvider = ConsumerContext.Provider;

const ConsumerConsumer = ConsumerContext.Consumer;

export {ConsumerProvider, ConsumerConsumer}

export default ConsumerContext
