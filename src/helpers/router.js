const STANDARD_OFFSET = 100;

const routes = {
    "about": {
        id: "about",
        offset: STANDARD_OFFSET
    },
    "frameworks": {
        id: "frameworks",
        offset: STANDARD_OFFSET
    },
    "industry": {
        id: "industry",
        offset: STANDARD_OFFSET
    }
}

export const updateUrl = (url) => {
    window.history.replaceState({
        section: url
    }, url);
}

export const route = (name) => {
    const info = routes[name];
    if(info){
        const top = document.getElementById(info.id).offsetTop - info.offset;
        window.scrollTo({
            top,
            left: 0,
            behavior: 'smooth'
        });
        updateUrl(name);
    }
}

export const loadCurrentRoute = () => {
    const segments = window.location.toString().split("=");
    if (segments.length > 1) {
        const name = segments[1];
        route(name);
    }
}