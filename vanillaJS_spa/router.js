window.route = (e)=> {
    const {event} = window;
    e = e || event;
    e.preventDefault();
    let url = e.target.href;
    window.history.pushState({},"", url);
    console.log("viewing:", url)
};

