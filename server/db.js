const { Sequelize } = require('sequelize');
const sequelize = new Sequelize("banao", "avnadmin", "AVNS_5MM4gzHfnrt7e3STIs5", {
    host: "pg-1a7ebac8-onkarbit15-f6fc.a.aivencloud.com",
    port: "25795",
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false,
            ca: `-----BEGIN CERTIFICATE-----
            MIIEQTCCAqmgAwIBAgIUH5iaNliZ2EybhCMZRWjLH1BsbA0wDQYJKoZIhvcNAQEM
            BQAwOjE4MDYGA1UEAwwvNGEyZTgyZmMtYWZmNS00MmE4LTk3YWYtYzdiNzExMGJl
            MGU0IFByb2plY3QgQ0EwHhcNMjQwNDAzMDc0MDUwWhcNMzQwNDAxMDc0MDUwWjA6
            MTgwNgYDVQQDDC80YTJlODJmYy1hZmY1LTQyYTgtOTdhZi1jN2I3MTEwYmUwZTQg
            UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBAMOdyFD9
            BGsIWpuwTe0fwUgKS9yvJAp2BGW85QzYHfh2LYYnoNKafURcKjlFJsagiBLICj0s
            vPvPOq061zpUA73TAKzTPKz3kyKrqzfFtF0sEmQYMMKi88eOTBWga3mJWCjs3jgs
            ftWyaL0eEbOhcfwhc2Icj/45G221/xcnS0CYp8lqtXRa8UL7w+LGw3cH0dt40GDI
            CtERoGM7yGxBGW1v0DIfuQncN+gvC3AOZu3XQTBfmYfM9XaXKmT1egl8h5BAUGFf
            2hPh9I054ABEvkB+S9dp5ltU2na4olzNzXN5vxvHXP7NZqrojM/vpqTIpsLJvIe9
            WcAs6gKoSkSx71Sq+WJAWHRcLTuZRbS8SNDxt3KKgebHIwkEzZ9EgErTLI0cDtcQ
            xudbXtCfiWJ2tukSpBc5lAizG019h0ekIbX8WXndEPaOwyJK0jK3CUhg0713oO+y
            y5/D0UggDvjV3kiJMuYb6z9nLmQd3PXcCPnJJTeOk13pQ7PLCZzgH0QhPwIDAQAB
            oz8wPTAdBgNVHQ4EFgQUOqZKctYuuKy6ArZnN94IQU+QTdQwDwYDVR0TBAgwBgEB
            /wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBAHUH3/FofiqcskxD
            JaXcfjULpBf4J9Wg5qY+EnOiwzZifvFLqh0pWmPzJcIslhmUc5pIL7IpdIoB6DC/
            7NApgxs14xttRYGS2phaOYQss9oHepst+iLYEZCBkeLMkch5I3xUuu1/lT2WdVj7
            OHXHfxL5rnXLQI4TVQXziOFWeoLOW26b3UptrVGZOXQv95l2yAddz2M/Jr1yyJkA
            auqjVK+cE/ZIhLqB/Aa1qeNiIq/pzK7NJoGlNuYusKxkJPz4q4c6RAm+6FgrVtMO
            kWd9ycwfU38FaOsSn/TV9dtMt253OOSwexwvPA9YNJ3PewbumNvJ1Z+zG5yDC/ct
            Ev3yn07zJjlAGkiFJQ5MA78q4qnHBa2hchfO10fdoVMScPfZfGPGWfl4Jz9YkEaY
            aWtVSBviPJXwZmR7isdchR4+zJ/5t/w1hwxammEE29dSBNrxqZJ8n1HkdUXYCkf2
            SyHfydz1qiLdz1I7f78NicymeELq89YOo2d7Qu+aKEPr8N+PGw==
            -----END CERTIFICATE-----            
            `
        }
    }
})

module.exports = sequelize;