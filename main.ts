class MCQuery {
    private static HANDSHAKE: number = 9;
    private static STAT: number = 9;
    private serverAddress: string = "";
    private queryPort: number = 19132;
    constructor(address: string, port: number = 19132) {
        this.serverAddress = address;
        this.queryPort = port;
    }
    private handshake() {
        var res = new Request();
    }
}

class ServerStat {

}

class Request {
    static MAGIC: number[] = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 2);
    public type: number;
    private byteStream: any = new java.io.ByteArrayOutputStream();
    private dataStream: any = new java.io.DataOutputStream(this.byteStream);
    constructor(type: number = 0) {
        var size: number = 1460;
        this.byteStream = new java.io.ByteArrayOutputStream(size);
        this.dataStream = new java.io.DataOutputStream(this.byteStream);
        this.type = type;
        Request.MAGIC[0] = 0xFE;
        Request.MAGIC[1] = 0xFD;
    }
}

class Util {

}