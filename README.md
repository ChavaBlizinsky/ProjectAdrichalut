🔧 Adrichalut - Technical Architecture & Design Patterns

In-depth technical documentation of the architecture, design patterns, and best practices

🎨 Design Patterns Used
1️⃣ MVC + N-Tier Architecture (Backend)
// API_1/Controllers → Presentation Layer
[ApiController]
[Route("api/[controller]")]
public class CustomersController : ControllerBase { }

// BL/Services → Business Logic Layer
public interface IBLCustomer { }
public class BLCustomerService : IBLCustomer { }

// DAL/Services → Data Access Layer
public interface ICustomer { }
public class CustomerService : ICustomer { }
2️⃣ Dependency Injection (DI)
// BLManager.cs - central dependency management
public BLManager()
{
    ServiceCollection services = new ServiceCollection();
    services.AddScoped<IDal, DalManager>();
    services.AddScoped<IBLCustomer, BLCustomerService>();
    // automatic injection of all services
}
3️⃣ Redux Architecture (Frontend)
// Redux Pattern: Action → Reducer → State
// Enables centralized state management and predictable updates
import { createSlice } from '@reduxjs/toolkit';

const customersSlice = createSlice({
  name: 'customers',
  initialState: { list: [], loading: false },
  reducers: {
    // pure functions without side effects
  }
});
4️⃣ Service Layer Pattern
// services/customersService.js
export const getCustomers = async () => {
  try {
    const response = await api.get("/Customers");
    return response.data;
  } catch (error) {
    throw error;
  }
};
5️⃣ Higher-Order Components (HOC) - Customer Protection
// components/CustomerLoginCheck.jsx
// Guard component for routes requiring customer authentication
const CustomerLoginCheck = () => {
  // check if user is logged in
  // redirect to login page if not
};
🏗️ Code Organization
Frontend Structure
src/
├── components/        # 📦 Reusable UI Components
│   ├── Navbar
│   ├── Hero
│   ├── CustomerSignup
│   ├── ConsultationBooking
│   ├── ProjectCalculator
│   ├── AgreementSign
│   └── CustomerDashboard
│
├── pages/            # 📄 Page Components (Full Pages)
│   ├── Home
│   ├── Services
│   ├── Inspirations
│   ├── Blog
│   └── Contact
│
├── services/         # 🔌 API Integration
│   ├── api.js        # Axios Base Configuration
│   ├── customersService.js
│   ├── meetingsService.js
│   ├── inspirationsService.js
│   └── weeklySchedulesService.js
│
├── redux/            # 🔄 State Management
│   ├── store.js
│   └── slices/       # Feature-based slices
│
└── assets/          # 🎨 Static Assets
    ├── images/
    └── styles/       # SCSS Files
Backend Structure (N-Tier)
ProjectAdrichalutServer/
├── API_1/            # 🌐 PRESENTATION LAYER
│   ├── Controllers/  # Endpoints
│   ├── Program.cs    # Startup Configuration
│   └── API_1.csproj
│
├── BL/               # 🧠 BUSINESS LOGIC LAYER
│   ├── Services/
│   │   ├── BLCustomerService
│   │   ├── BLMeetingsService
│   │   ├── BLInspirationsService
│   │   └── BLWeeklyScheduleService
│   ├── BLManager.cs  # Service Orchestrator
│   └── BL.csproj
│
├── DAL/              # 💾 DATA ACCESS LAYER
│   ├── Services/
│   │   ├── CustomerService
│   │   ├── MeetingService
│   │   ├── InspirationService
│   │   └── WeeklyScheduleService
│   ├── Models/       # Entity Models
│   ├── DalManager.cs
│   └── DAL.csproj
│
└── project_2/        # 🗄️ DATABASE MODELS
    ├── database.mdf  # SQL Server Database
    └── Entity Models
🔄 Data Flow: End-to-End
Example: Adding a Customer
1️⃣  FRONTEND (React)
   └─ CustomerSignup.jsx
      └─ handleSubmit() → addCustomer(form)

2️⃣  SERVICE LAYER (Axios)
   └─ customersService.js
      └─ api.post("/Customers", data)

3️⃣  HTTP REQUEST
   └─ POST https://localhost:7110/api/Customers

4️⃣  BACKEND (ASP.NET Core)
   └─ CustomersController.cs
      └─ [HttpPost] public async Task Post(CustomerDTO dto)

5️⃣  BUSINESS LOGIC (C#)
   └─ BLCustomerService.cs
      └─ AddCustomer(customer)

6️⃣  DATA ACCESS (EF Core)
   └─ CustomerService.cs
      └─ SaveAsync() → SQL Server

7️⃣  DATABASE (SQL)
   └─ INSERT INTO Customers ...

8️⃣  RESPONSE CHAIN
   └─ Backend → API → Axios → Redux → React State → UI Re-render
📡 API Communication Flow
// 1. Axios Configuration (axios instance)
const api = axios.create({
  baseURL: "https://localhost:7110/api",
});

// 2. Service Layer (async/await)
export const getCustomers = async () => {
  const response = await api.get("/Customers");
  return response.data; // ✓ Promise-based
};

// 3. Redux Integration (with Redux Thunk)
export const fetchCustomers = createAsyncThunk(
  'customers/fetchCustomers',
  async () => {
    return await getCustomers();
  }
);

// 4. React Component (useSelector)
const customers = useSelector(state => state.customers.list);
🔒 Security Best Practices
CORS Policy (Cross-Origin Resource Sharing)
// Backend: Program.cs
builder.Services.AddCors(options =>
{
    options.AddPolicy("MyPolicy", policy =>
    {
        policy.WithOrigins("http://localhost:3000", "http://localhost:3001")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

✓ Allows only requests from Ports 3000 and 3001
✓ Blocks unauthorized requests

Input Validation (Frontend & Backend)
// Frontend: Validation in Component
const validateEmail = (email) => /^\S+@\S+\.\S+$/.test(email);
const validatePhone = (phone) => /^0[2-9]\d{7,8}$/.test(phone);

// Backend: Data Annotations
public class CustomerDTO {
    [Required]
    [EmailAddress]
    public string Email { get; set; }
    
    [Phone]
    public string Phone { get; set; }
}
HTTPS Configuration
// Program.cs
app.UseHttpsRedirection(); // ✓ Enforce HTTPS
⚡ Performance Optimization
1. React Optimization
// ✓ Code splitting with React.lazy()
const InspirationsGallery = React.lazy(() => 
  import('./components/InspirationsGallery')
);

// ✓ Memoization
const Navbar = React.memo(({ title }) => <nav>{title}</nav>);

// ✓ useCallback for event handlers
const handleChange = useCallback((e) => {
  setForm({ ...form, [e.target.name]: e.target.value });
}, [form]);
2. CSS Animation Optimization
// Framer Motion: Declarative animations
<motion.div
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Smooth animation ✨
</motion.div>
3. SCSS Mixins for DRY Code
// assets/styles/_mixins.scss
@mixin button-base {
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}

.btn-primary {
  @include button-base;
  background-color: #007bff;
}
4. Backend Caching (Potential)
// Cached queries for frequently accessed data
[HttpGet]
[ResponseCache(Duration = 300)] // Cache for 5 minutes
public async Task<IActionResult> GetCustomers()
{
    var customers = await _blManager.Customer.GetAllAsync();
    return Ok(customers);
}
🧪 Testing Strategy
Frontend Testing (Jest + React Testing Library)
// setupTests.js - configuration
import '@testing-library/jest-dom';

// Example test
test('renders signup form', () => {
  render(<CustomerSignup />);
  expect(screen.getByText('Join us!')).toBeInTheDocument();
});
Backend Testing (xUnit or NUnit - Not Yet Implemented)
[Fact]
public async Task AddCustomer_WithValidData_ReturnsSuccess()
{
    // Arrange
    var customerDTO = new CustomerDTO { /* ... */ };
    
    // Act
    var result = await _blManager.Customer.AddAsync(customerDTO);
    
    // Assert
    Assert.NotNull(result);
}
🚀 Deployment Strategy
Frontend Deployment (Vercel/Netlify)
npm run build  # Production build
# Upload dist/ folder to CDN
Backend Deployment (Azure/AWS)
dotnet publish -c Release
# Deploy to cloud service
# Database migration: Entity Framework Migrations
Environment Configuration
// .env (Frontend)
REACT_APP_API_URL=https://api.adrichalut.com
REACT_APP_ENV=production

// appsettings.json (Backend)
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=prod-server;Database=Adrichalut;"
  }
}
🎓 Key Learning Outcomes
Frontend Skills

✓ React Hooks (useState, useEffect, useCallback)
✓ Redux state management
✓ React Router navigation
✓ Async/Await & Promises
✓ REST API integration
✓ SCSS styling & responsive design
✓ Component composition & props
✓ Error handling & validation

Backend Skills

✓ ASP.NET Core REST API
✓ Entity Framework Core (ORM)
✓ Dependency Injection
✓ CORS & security
✓ Async programming
✓ Database design
✓ Business logic implementation
✓ Error handling & logging

Full-Stack Skills

✓ N-Tier architecture
✓ Separation of concerns
✓ API design principles
✓ Database normalization
✓ Authentication & authorization (planning)
✓ Deployment & DevOps basics

📊 Project Metrics
Metric	Value
Frontend Components	~15+
Backend Endpoints	4+ (Customers, Meetings, Inspirations, Weekly)
Database Tables	4+
Lines of Code (Frontend)	~2,000+
Lines of Code (Backend)	~1,500+
Technology Stack Size	10+ core technologies
🔮 Future Enhancement Roadmap
Phase 1: MVP ✓ (Current)
├─ Customers Management
├─ Meetings Booking
├─ Inspirations Gallery
└─ Weekly Schedules

Phase 2: Advanced Features
├─ User Authentication (JWT)
├─ Payment Integration
├─ Email Notifications
└─ WhatsApp Integration

Phase 3: AI & Automation
├─ N8N AI Chat Integration
├─ Smart Recommendations
├─ Automated Reports
└─ ML-Based Pricing

Phase 4: Analytics & Scale
├─ Dashboard Analytics
├─ Advanced Reporting
├─ Multi-language Support
└─ Mobile App (React Native)
📖 Resources & References
Frontend: React Docs | Redux
Backend: ASP.NET Core | EF Core
Database: SQL Server
Tools: Swagger/OpenAPI | Postman

Document Version: 1.0.0
Last Updated: June 1, 2026
Target Audience: Developers, Tech Leads, CV Reviewers
