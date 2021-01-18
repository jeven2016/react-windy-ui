export const createLink = (linkConfig) => {
    const link = document.createElement('link');
    for (const [key, value] of Object.entries(linkConfig)) {
        if (key === 'onload') {
            //function
            link.onload = linkConfig.onload;
            continue;
        }
        link[key] = value;
    }

    return link;
};