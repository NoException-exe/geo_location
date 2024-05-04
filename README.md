### Geo Location API

This API was developed in TypeScript using the Fastify framework to provide location information based on IP addresses. It utilizes the GeoLite2-City.mmdb database for accurate location data.

### How to Use

- **Installation**: Run `npm install` to install dependencies.
- **Dev Command**: `npm run dev`
- **Build Command**: `npm run build`
- **Start Command**: `npm run start`
- 
### Database

To ensure the accuracy of location information, this API uses the GeoLite2-City.mmdb database. Make sure to regularly update this file to get the latest data.

### Endpoint

- **HTTP Method**: POST
- **URL**: `http://localhost:3000/v1/json`
- **Content Type**: JSON

Make sure to send data in JSON format in the request body.

### Request Body

```json
{
  "ip": "45.168.201.213"
}
```

### Response

```json
{
  "success": true,
  "ip": "45.168.201.213",
  "country_code": "BR",
  "country_name": "Brazil",
  "region_code": "MG",
  "region_name": "Minas Gerais",
  "city": "Belo Horizonte",
  "zip_code": "30000",
  "time_zone": "America/Sao_Paulo",
  "latitude": -19.9029,
  "longitude": -43.9572
}
```

### Notes

Make sure to include the desired IP address in the request body to obtain accurate location information. It's highly recommended to keep the GeoLite2-City.mmdb database updated to ensure the accuracy of location information.

---
