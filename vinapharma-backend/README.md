# 🌿 Vinapharma Backend API

Backend Node.js + Express + MongoDB Atlas cho website Vinapharma.

---

## 📋 Bước 1 — Cài Node.js

1. Vào **https://nodejs.org**
2. Tải bản **LTS** (nút màu xanh lá)
3. Cài đặt bình thường (next → next → finish)
4. Mở **Command Prompt** hoặc **Terminal**, gõ kiểm tra:
   ```
   node --version
   npm --version
   ```
   Nếu hiện số phiên bản là cài thành công ✅

---

## 📋 Bước 2 — Tạo MongoDB Atlas

1. Vào **https://www.mongodb.com/atlas** → Đăng ký miễn phí
2. Tạo cluster → chọn **Free (M0)**
3. Chọn region gần nhất (Singapore)
4. Tạo **Database User**:
   - Username: `vinapharma`
   - Password: đặt mật khẩu (ghi nhớ lại)
5. **Network Access** → Add IP Address → **Allow Access from Anywhere** (0.0.0.0/0)
6. **Connect** → **Drivers** → Copy connection string:
   ```
   mongodb+srv://vinapharma:<password>@cluster0.xxxxx.mongodb.net/vinapharma
   ```

---

## 📋 Bước 3 — Cấu hình project

1. Giải nén thư mục `vinapharma-backend`
2. Đổi tên file `.env.example` thành `.env`
3. Mở file `.env`, điền thông tin:
   ```
   MONGODB_URI=mongodb+srv://vinapharma:MatKhauCuaBan@cluster0.xxxxx.mongodb.net/vinapharma
   JWT_SECRET=vinapharma_2026_secret_key_rat_dai_va_kho_doan
   JWT_EXPIRES_IN=7d
   PORT=5000
   NODE_ENV=development
   ```

---

## 📋 Bước 4 — Cài thư viện và chạy

Mở Terminal trong thư mục `vinapharma-backend`:

```bash
# Cài thư viện
npm install

# Tạo dữ liệu mẫu (chạy 1 lần đầu)
node seed.js

# Chạy server
npm run dev
```

Server sẽ chạy tại: **http://localhost:5000**

---

## 🔑 Tài khoản Admin mặc định

```
Email:    admin@vinapharma.vn
Password: Admin@123456
```

---

## 📡 Các API có sẵn

### Auth
| Method | Endpoint | Mô tả |
|--------|----------|-------|
| POST | /api/auth/register | Đăng ký user |
| POST | /api/auth/login | Đăng nhập |
| GET | /api/auth/me | Thông tin tài khoản |

### Sản phẩm
| Method | Endpoint | Mô tả | Quyền |
|--------|----------|-------|-------|
| GET | /api/products | Lấy tất cả | Public |
| GET | /api/products?brand=TH1 | Lọc theo brand | Public |
| GET | /api/products?category=Xương khớp | Lọc theo danh mục | Public |
| GET | /api/products/:id | Chi tiết sản phẩm | Public |
| POST | /api/products | Thêm sản phẩm | Admin |
| PUT | /api/products/:id | Sửa sản phẩm | Admin |
| DELETE | /api/products/:id | Xóa sản phẩm | Admin |

### Tin tức
| Method | Endpoint | Mô tả | Quyền |
|--------|----------|-------|-------|
| GET | /api/posts | Lấy bài đã đăng | Public |
| GET | /api/posts/:id | Chi tiết bài viết | Public |
| POST | /api/posts | Đăng bài mới | Admin |
| PUT | /api/posts/:id | Sửa bài viết | Admin |
| DELETE | /api/posts/:id | Xóa bài viết | Admin |
| GET | /api/posts/admin/all | Tất cả bài (kể cả draft) | Admin |

### Liên hệ
| Method | Endpoint | Mô tả | Quyền |
|--------|----------|-------|-------|
| POST | /api/contacts | Gửi form liên hệ | Public |
| GET | /api/contacts | Xem tất cả liên hệ | Admin |
| PUT | /api/contacts/:id | Cập nhật trạng thái | Admin |

---

## 🗂️ Cấu trúc thư mục

```
vinapharma-backend/
├── config/
│   └── db.js           # Kết nối MongoDB
├── middleware/
│   └── auth.js         # JWT authentication
├── models/
│   ├── User.js         # Schema tài khoản
│   ├── Product.js      # Schema sản phẩm
│   ├── Post.js         # Schema bài viết
│   └── Contact.js      # Schema liên hệ
├── routes/
│   ├── auth.js         # API đăng nhập/đăng ký
│   ├── products.js     # API sản phẩm
│   ├── posts.js        # API tin tức
│   └── contacts.js     # API liên hệ
├── server.js           # File chính
├── seed.js             # Tạo dữ liệu mẫu
├── .env.example        # Mẫu cấu hình
└── package.json
```
