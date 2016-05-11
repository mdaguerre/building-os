

GET iot.example.com/rooms.json
{
    "rooms": [
        {
            "id": UUID, // from stargate 
            "label": varchar, // UY office 
            "devices": [
                {
                    "id": UUID, // this is the device id form photon
                    "label": varchar, // camera
                    "type": UUID // react native component for logitech c6000
                },
                {
                    "id": UUID,
                    "label": varchar, // AC
                    "type": UUID // react native component for Generic AC
                },
                {
                    "id": UUID,
                    "label": varchar, // Coffemaker
                    "type": UUID // react native component for Martin Coffe Maker Hack
                }
            ]
        },
        {
            "id": UUID, // from stargate 
            "label": varchar, // HQ 3rd floor 
            "devices": [
                {
                    "id": UUID, // this is the device id form photon
                    "label": varchar, // camera
                    "type": UUID
                },
            ]
        }
    ]
}