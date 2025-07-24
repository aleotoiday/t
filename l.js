let body = $response.body;
let obj = JSON.parse(body);

obj.entitlement = {
  "status": "subscriber",
  "storage": {
    "used": 0,
    "limit": 1099511627776,
    "display_limit": 1099511627776,
    "warn": 992137445376
  }
};

obj.current_subs = {
  "product_id": "lightroom",
  "store": "adobe",
  "purchase_date": "2021-01-01T00:00:00.000Z",
  "sao": {
    "inpkg_CCES": "0",
    "inpkg_CCLE": "1",
    "storage_quota": "100"
  }
};

$done({ body: JSON.stringify(obj) });
