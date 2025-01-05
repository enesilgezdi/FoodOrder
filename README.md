# Food Order App

[English Version Below](#english-version)

## Proje Açıklaması
Bu proje, kullanıcıların yemek siparişlerini verebildiği basit bir yemek sipariş uygulamasıdır. Kullanıcılar farklı yemek seçeneklerini listeleyebilir, sepetlerine ekleme yapabilir ve sipariş detaylarını görebilirler. Projenin amacı, **React** ile **state management** konseptlerini (başlangıçta context kullanımı ile, ileride Redux Toolkit'e geçilecek) ve backend entegrasyonunu öğrenmektir.

### Özellikler
- Kullanıcılar yemekleri listeleyebilir ve sepete ekleyebilir.
- Sepet içerikleri dinamik olarak güncellenir.
- Sipariş gönderim işlemi backend tarafında işlenir.
- Hata mesajları ve yüklenme durumları yönetilmektedir.

### Kullanılan Teknolojiler
- **Frontend:** React
- **Backend:** Node.js, Express.js
- **State Management:** Context API (Redux Toolkit ile değiştirilecek)
- **Veri Saklama:** local JSON dosyası
- **HTTP İstekleri:** Fetch API

### Kurulum

1. Projeyi klonlayın:
   ```bash
   git clone https://github.com/kullanici-adi/FoodOrder-APP.git
   cd FoodOrder-APP
   ```
2. Gerekli bağımlılıkları yükleyin:
   ```bash
   cd backend
   npm install
   ```
3. Backend sunucusunu çalıştırın:
   ```bash
   npm start
   ```
4. Frontend kısmını çalıştırın:
   ```bash
   cd ..
   npm install
   npm start
   ```

### Kullanım
- Ana sayfada listelenen yemeklerden istediğiniz yemekleri "Add to Cart" butonuna basarak sepete ekleyin.
- Sepeti görüntülemek için "Cart" ikonuna tıklayın.
- Siparişi tamamlamak için gerekli bilgileri doldurup gönderin.

### Gelecekteki Geliştirmeler
- Redux Toolkit ile state yönetimi.
- Daha fazla doğrulama kontrolü.
- Gerçek zamanlı veri tabanı kullanımı (MongoDB).

---

## English Version

### Project Description
This project is a simple food ordering application where users can browse available meals, add items to the cart, and review order details. It aims to demonstrate **React** state management concepts (initially with context, planned to be migrated to Redux Toolkit) and backend integration.

### Features
- Users can list meals and add them to the cart.
- Cart contents are dynamically updated.
- Orders are processed on the backend.
- Error handling and loading states are managed.

### Technologies Used
- **Frontend:** React
- **Backend:** Node.js, Express.js
- **State Management:** Context API (will be replaced by Redux Toolkit)
- **Data Storage:** Local JSON file
- **HTTP Requests:** Fetch API

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/username/FoodOrder-APP.git
   cd FoodOrder-APP
   ```
2. Install dependencies:
   ```bash
   cd backend
   npm install
   ```
3. Run the backend server:
   ```bash
   npm start
   ```
4. Run the frontend:
   ```bash
   cd ..
   npm install
   npm start
   ```

### Usage
- Browse meals on the main page and add them to the cart using the "Add to Cart" button.
- View the cart by clicking the "Cart" icon.
- Complete the order by filling in the required details and submitting the form.

### Future Improvements
- State management with Redux Toolkit.
- More validation checks.
- Real-time database integration (MongoDB).

