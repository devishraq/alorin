import { eventsHandler, attributeHandler } from './';

export const propsHandler = (elementProps, element) => {
    if (elementProps != null) attributeHandler(elementProps, element);
    eventsHandler(elementProps, element);
};