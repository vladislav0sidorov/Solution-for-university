export type Connection = {
    connect(): void;
    disconnect(): void;
}

export function createEncryptedConnection(roomId: string): Connection {
    // A real implementation would actually connect to the server
    return {
      connect() {
        console.log('✅ 🔐 Connecting to "' + roomId + '... (encrypted)');
      },
      disconnect() {
        console.log('❌ 🔐 Disconnected from "' + roomId + '" room (encrypted)');
      }
    };
  }

  export function createUnencryptedConnection(roomId: string): Connection {
    // A real implementation would actually connect to the server
    return {
      connect() {
        console.log('✅ Connecting to "' + roomId + '... (unencrypted)');
      },
      disconnect() {
        console.log('❌ Disconnected from "' + roomId + '" room (unencrypted)');
      }
    };
  }
