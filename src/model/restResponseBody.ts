class RestResponseBody {
    success: boolean = false
    message: string = ''
    data: Object
    error: Object

    constructor({ success, message, data, error }: {
        success: boolean;
        message: string;
        data: any;
        error: any
    }) {
        this.success = success;
        this.message = message;
        this.data = data;
        this.error = error;
    }
}

export default RestResponseBody