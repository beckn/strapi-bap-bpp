# Beckn Strapi BAP-BPP

This repository provides a unified Strapi-based solution for implementing the Beckn Energy Trade use case. Acting as both a Buyer App Participant (BAP) and a Buyer Platform Participant (BPP), the server combines functionalities for consumer (BAP) and prosumer (BPP) interactions, making it a versatile backend for the Beckn Energy ecosystem.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Architecture](#architecture)
- [Plugins](#plugins)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Release Notes](#release-notes)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

The **Beckn Strapi BAP-BPP** server is tailored for the energy trade use case within the Beckn Protocol ecosystem. This server:

- Integrates both BAP (consumer) and BPP (prosumer) functionalities into a single Strapi instance.
- Handles consumer-side APIs for energy consumption and utility information.
- Manages prosumer-side APIs for energy supply and trading.
- Utilizes the [Beckn Strapi Plugins](https://github.com/beckn/strapi-plugins) for seamless protocol compliance and modularity.

---

## Features

- Unified BAP and BPP server for the Beckn Energy use case.
- Pre-integrated plugins for handling Beckn APIs, energy data, and dashboards.
- Supports modularity and customization through plugins.
- Centralized data management for both consumers and prosumers.
- Fully compliant with Beckn Protocol standards.

---

## Architecture

This repository integrates several plugins from the [Beckn Strapi Plugins](https://github.com/beckn/strapi-plugins) repository to handle specific functionalities. The architecture includes:

- **BAP (Consumer APIs)**: Handles requests and data related to energy consumers.
- **BPP (Prosumer APIs)**: Manages requests and data for energy suppliers.
- **Shared Tables**: Centralized database schema for handling both BAP and BPP data.

---

## Plugins

The following plugins are integrated within the `src/plugins` folder:

1. **Beckn-BPP-Adapter**:
   - Handles Beckn API interactions for seamless protocol communication.

2. **Beckn-MDM**:
   - Fetches and manages customer and utility-related data.
   - Supports dashboards and other utility services.

3. **Beckn-Trade-BAP**:
   - Manages consumer-side APIs and relevant data specific to energy trading.

4. **Beckn-Trade-BPP**:
   - Handles prosumer-side APIs and manages energy supply and trading data.

---

## Installation

### Prerequisites

Ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn
- Strapi (v4)

### Steps

1. Clone this repository:

   ```bash
   git clone https://github.com/beckn/strapi-bap-bpp.git
   ```

2. Navigate to the project directory:

   ```bash
   cd strapi-bap-bpp
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Build the Strapi Admin panel:

   ```bash
   npm run build
   ```

5. Start the development server:

   ```bash
   npm run develop
   ```

---

## Configuration

The server uses environment variables for configuration. Create a `.env` file in the root directory and define the following variables:

```env
HOST=0.0.0.0
PORT=1337
DATABASE_HOST=your_database_host
DATABASE_PORT=your_database_port
DATABASE_NAME=your_database_name
DATABASE_USERNAME=your_database_username
DATABASE_PASSWORD=your_database_password
BECKN_API_KEY=your_api_key
```

Refer to the plugin-specific documentation for additional configurations.

---

## Usage

Once the server is running, use the Strapi admin panel to manage data and APIs. 

### Key Use Cases

1. **Consumer API (BAP)**:
   - Manage consumer-side workflows such as energy requests and utility details.
   
2. **Prosumer API (BPP)**:
   - Handle workflows for energy supply, trading, and policy compliance.

3. **Dashboards and Reports**:
   - Access dashboards for utility data and energy trade statistics.

---

## Release Notes

### v1.0.0

- Initial release of a unified Strapi server for both BAP and BPP functionalities.
- Features:
  - Integration with Beckn Strapi Plugins.
  - Handles energy trade workflows for both consumers and prosumers.
  - Centralized database schema for managing shared data.

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a feature branch.
3. Make your changes and add tests.
4. Open a pull request.

Please ensure your code adheres to the project's coding standards.

---

## License

This project is licensed under the [MIT License](LICENSE).

For questions or support, raise an issue in the repository or contact the Beckn team.
