const headers = {
    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'accept': 'application/json'
};

const apiUrl = "https://repetitora.net/api/JS/Tasks";

const corsMode = 'cors';

function requestData(url,type, body){
    return fetch(url,
        {
            method: type,
            body: body,
            headers: headers,
            mode: corsMode
        })

        .then(result => result.json())
}

export function createTask(title,widgetId){
    const data = new URLSearchParams();
    data.append('widgetId', widgetId);
    data.append('title', title);

    return requestData(apiUrl,"POST", data)
}

export function updateTask(title = null, taskId, isDone = null ,widgetId){
    const data = new URLSearchParams();
    data.append('widgetId', widgetId);
    data.append('taskId', taskId);
    if(isDone != null) {
        data.append('done', isDone);
    }
    if(title != null) {
        data.append('title', title);
    }

    return requestData(apiUrl,"PUT", data)
}

export function  getTasks(widgetId){
    return requestData(`${apiUrl}?widgetId=${widgetId}&count=40`,"GET", null)
}