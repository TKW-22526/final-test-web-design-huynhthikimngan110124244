const urlParams = new URLSearchParams(window.location.search);
const productType = urlParams.get('product');
 
const data = {
    // ===== CHÓ =====
    "hat-royal-canin": {
        title: "Hạt Royal Canin Medium Puppy (Chó con)",
        price: "282.000đ", weight: "3kg",
        img: "../assets/hat-Royal-Canin.jpg",
        desc: "Thương hiệu: Royal Canin. Phù hợp cho chó con từ 2–12 tháng tuổi, cân nặng 11–25kg. Công thức dinh dưỡng cân bằng hỗ trợ tiêu hóa, phát triển xương chắc khỏe và tăng cường hệ miễn dịch. Khuyến cáo 1–2 bữa/ngày.",
        ingredients: "Protein gia cầm, bắp, chất béo động vật, củ cải đường, gluten bắp, protein thịt lợn, gạo, bột lúa mì, khoáng chất, dầu cá, dầu đậu nành, men, fructo-oligo-sacarit (0,34%), chiết xuất cúc vạn thọ (lutein)."
    },
    "hat-pro-plan": {
        title: "Hạt Purina Pro Plan Chó Trưởng Thành",
        price: "450.000đ", weight: "1.3kg",
        img: "../assets/hat-pro-plan-cho.jpg",
        desc: "Thương hiệu: Purina. Chứa hơn 26% protein từ thịt thật, hỗ trợ cơ bắp săn chắc. Omega-6 và kẽm cho lông bóng mượt. Prebiotic tự nhiên nuôi dưỡng đường ruột. Không màu nhân tạo, hương liệu nhân tạo.",
        ingredients: "Thịt gà, gạo, bắp, gluten bắp, chất béo gia cầm, khoáng chất, dầu cá hồi (nguồn omega-3), taurine, vitamin A, D3, E, B12, kẽm sulfat."
    },
    "hat-pedigree": {
        title: "Hạt Pedigree Chó Trưởng Thành Vị Thịt Bò",
        price: "185.000đ", weight: "2kg",
        img: "../assets/hat-pedigree-cho.jpg",
        desc: "Thương hiệu: Pedigree. Thức ăn hàng ngày cho chó trưởng thành vị thịt bò và rau củ. Bổ sung 18 vitamin và khoáng chất thiết yếu. Omega-3 và 6 giúp lông sáng bóng, hỗ trợ sức đề kháng. Giá cả phải chăng, phù hợp dùng hàng ngày.",
        ingredients: "Ngũ cốc, thịt bò và sản phẩm từ thịt (tối thiểu 4%), sản phẩm thực vật, dầu và chất béo, đường, khoáng chất, vitamin A, D3, E, B12, niacin, axit folic."
    },
    "hat-hills-cho": {
        title: "Hạt Hill's Science Diet Chó Con",
        price: "520.000đ", weight: "1.8kg",
        img: "../assets/hat-hills-cho.jpg",
        desc: "Thương hiệu: Hill's. Công thức khoa học chuyên biệt cho chó con dưới 1 tuổi. DHA từ dầu cá hỗ trợ não bộ và thị lực. Canxi và phốt pho cân bằng giúp xương và răng chắc khỏe. Không chứa màu và hương liệu nhân tạo.",
        ingredients: "Thịt gà, bột gà, bột lúa mì, bắp, bột yến mạch, chất béo gia cầm, dầu cá, khoáng chất, caroten, vitamin C, vitamin E, taurine, beta-caroten."
    },
    "hat-orijen-cho": {
        title: "Hạt Orijen Original Cho Chó (Grain-Free)",
        price: "650.000đ", weight: "2kg",
        img: "../assets/hat-orijen-cho.jpg",
        desc: "Thương hiệu: Orijen (Canada). Grain-free – không ngũ cốc, 85% nguyên liệu từ thịt tươi và hải sản. Công thức Biologically Appropriate™ phù hợp với bản năng ăn thịt của chó. Phù hợp chó mọi lứa tuổi và mọi giống.",
        ingredients: "Thịt gà tươi (15%), thịt tây tươi (15%), cá trứng tươi (10%), thịt gà đông lạnh (10%), cá cơm (10%), thịt vịt tươi (8%), trứng gà (5%), gan gà tươi (5%), cá trích (5%), rau cải, đậu lăng, đậu xanh."
    },
    "hat-taste-wild-cho": {
        title: "Hạt Taste of the Wild Pacific Stream (Chó)",
        price: "580.000đ", weight: "1.5kg",
        img: "../assets/hat-taste-wild-cho.jpg",
        desc: "Thương hiệu: Taste of the Wild (Mỹ). Grain-free, nguồn protein chính là cá hồi hun khói. Chứa probiotics K9 Strain® độc quyền hỗ trợ tiêu hóa. Omega-3 và 6 từ dầu cá hồi cho lông bóng. Không chứa ngũ cốc, màu, hương nhân tạo.",
        ingredients: "Cá hồi hun khói, cá hồi thái mặt, đậu lăng, đậu xanh, khoai tây, dầu cá hồi, carrot, việt quất, axit amin thiết yếu, probiotics (Lactobacillus acidophilus, Bifidobacterium)."
    },
    "hat-acana-cho": {
        title: "Hạt Acana Wild Prairie Cho Chó",
        price: "490.000đ", weight: "2kg",
        img: "../assets/hat-acana-cho.jpg",
        desc: "Thương hiệu: Acana (Canada). 60% nguyên liệu từ thịt tươi, 40% rau củ và trái cây vùng đồng cỏ. Grain-free, không khoai tây. Phong phú về protein từ gà, gà tây và trứng thả đồng.",
        ingredients: "Thịt gà tươi (30%), thịt gà tây tươi (15%), trứng gà tươi (10%), yến mạch, đậu garbanzo, đậu lăng, bí đỏ, carrot, đậu xanh, gan gà khô, dầu cá trứng."
    },
    "hat-nutri-source-cho": {
        title: "Hạt NutriSource Grain-Free Chó",
        price: "380.000đ", weight: "2kg",
        img: "../assets/hat-nutri-source-cho.jpg",
        desc: "Thương hiệu: NutriSource (Mỹ). Công thức Good 4 Life® bổ sung enzyme tiêu hóa, probiotics và prebiotics. Grain-free, nguồn protein chính là thịt gà và cá hồi. Hỗ trợ cân bằng vi khuẩn đường ruột.",
        ingredients: "Thịt gà, bột cá hồi, đậu garbanzo, đậu lăng, đậu xanh, chất béo gia cầm, dầu cá hồi, khoáng chất, vitamin nhóm B, taurine, enzyme tiêu hóa, Lactobacillus acidophilus."
    },
    // ===== MÈO =====
    "hat-whiskas": {
        title: "Hạt Whiskas Junior Cho Mèo Con",
        price: "141.000đ", weight: "1.2kg",
        img: "../assets/hat-Whiskas-Junior.jpg",
        desc: "Thương hiệu: Whiskas. Dành cho mèo con 2–12 tháng tuổi. DHA hỗ trợ não bộ và thị lực, sữa non tăng cường miễn dịch, canxi và vitamin D cho xương chắc. Liều: 6–12 tuần: 25–40g/ngày; 6–12 tháng: 70–110g/ngày. Chia 3–4 bữa/ngày.",
        ingredients: "Ngũ cốc, thịt và sản phẩm từ thịt, protein thực vật thuỷ phân, dầu và chất béo, khoáng chất, sữa và sản phẩm sữa, taurine, vitamin A, D, E."
    },
    "hat-royal-canin-meo": {
        title: "Hạt Royal Canin Kitten Cho Mèo Con",
        price: "320.000đ", weight: "2kg",
        img: "../assets/cat-food-royal-canin.jpg",
        desc: "Thương hiệu: Royal Canin. Dành cho mèo con dưới 12 tháng. Phức hợp chất chống oxy hóa độc quyền tăng cường sức đề kháng. Hạt nhỏ dễ nhai cho hàm răng mèo con. Calo cao đáp ứng nhu cầu phát triển.",
        ingredients: "Bột gia cầm, gạo, bột bắp, chất béo động vật, bột ngũ cốc, protein thực vật thuỷ phân, dầu cá, khoáng chất, fructo-oligo-sacarit, taurine, vitamin nhóm B."
    },
    "hat-me-o-adult": {
        title: "Hạt Me-O Adult Cho Mèo Trưởng Thành",
        price: "195.000đ", weight: "1.3kg",
        img: "../assets/hat-me-o-adult.jpg",
        desc: "Thương hiệu: Me-O (Thái Lan). Thức ăn hàng ngày phổ biến nhất cho mèo trưởng thành. Hỗ trợ hệ tiêu hóa khoẻ mạnh, lông bóng mượt nhờ omega-6. Giá cả phải chăng, phù hợp dùng lâu dài. Có nhiều vị: Cá hồi, Cá biển, Gà.",
        ingredients: "Bột ngũ cốc, bột cá, protein thực vật thuỷ phân, chất béo động vật, khoáng chất, taurine, vitamin A, D3, E, sắt, kẽm, mangan."
    },
    "hat-hills-meo": {
        title: "Hạt Hill's Science Diet Mèo Trưởng Thành",
        price: "430.000đ", weight: "1.5kg",
        img: "../assets/hat-science-diet-meo.jpg",
        desc: "Thương hiệu: Hill's. Được khuyến nghị bởi bác sĩ thú y. Công thức cân bằng dưỡng chất chính xác cho mèo từ 1–6 tuổi. Hỗ trợ kiểm soát cân nặng lý tưởng. Chứa Vitamin E và C chống oxy hoá.",
        ingredients: "Thịt gà, bột thịt gà, bột lúa mì, bắp, chất béo gia cầm, bột cá, bột gạo, khoáng chất, taurine, caroten, vitamin C, E, beta-caroten, kẽm."
    },
    "hat-purina-one-meo": {
        title: "Hạt Purina ONE Tender Selects Cho Mèo",
        price: "265.000đ", weight: "1.5kg",
        img: "../assets/hat-purina-one-meo.jpg",
        desc: "Thương hiệu: Purina ONE. Hạt có hai kết cấu – cứng và mềm – kích thích khẩu vị mèo. Nguồn protein số 1 là thịt gà thật. Omega-6 cho lông bóng khỏe. Không màu, hương nhân tạo.",
        ingredients: "Thịt gà, bột thịt gà, bắp, chất béo gia cầm, bột lúa mì, gạo, khoáng chất, taurine, vitamin A, D3, E, B12, axit folic, kẽm sulfat, sắt sulfat."
    },
    "hat-orijen-meo": {
        title: "Hạt Orijen Cat & Kitten (Grain-Free)",
        price: "420.000đ", weight: "1.8kg",
        img: "../assets/hat-orijen-meo.jpg",
        desc: "Thương hiệu: Orijen (Canada). 85% nguyên liệu từ thịt tươi và hải sản. Phù hợp cả mèo con lẫn mèo trưởng thành. Grain-free hoàn toàn. Protein cao (40%) đáp ứng bản năng ăn thịt của mèo.",
        ingredients: "Thịt gà tươi (15%), cá trứng tươi (15%), gan gà tươi (10%), thịt gà đông lạnh (10%), cá cơm (10%), trứng gà (5%), đậu lăng, đậu xanh, rau bina, carrot, dầu cá trứng."
    },
    "hat-acana-meo": {
        title: "Hạt Acana Regionals Pacifica Cho Mèo",
        price: "550.000đ", weight: "1.8kg",
        img: "../assets/hat-acana-meo.jpg",
        desc: "Thương hiệu: Acana (Canada). Nguồn protein chính từ 5 loại cá biển Thái Bình Dương: cá trứng, cá hồi, cá trích, cá ngừ, cá tuyết. Grain-free và không khoai tây. Omega-3 dồi dào từ cá tươi.",
        ingredients: "Cá trứng tươi (20%), cá hồi tươi (15%), cá trích tươi (10%), gan cá hồi tươi (8%), đậu garbanzo, đậu lăng, đậu xanh, dầu cá trứng, rau cải, việt quất, carrot."
    },
    // ===== PATE =====
    "pate-me-o": {
        title: "Pate Me-O Vị Cá Hồi (Hộp)",
        price: "18.000đ", weight: "400g",
        img: "../assets/pate-meo-me-o.jpg",
        desc: "Thương hiệu: Me-O. Pate hộp thiếc tiện lợi, vị cá hồi thơm ngon. Bổ sung taurine hỗ trợ thị lực và chức năng tim. Không chứa chất bảo quản nhân tạo. Phù hợp mèo trưởng thành từ 1 tuổi. Dùng riêng hoặc kết hợp với hạt.",
        ingredients: "Cá hồi (tối thiểu 4%), nước, thịt gia súc và gia cầm, protein thực vật thuỷ phân, dầu hướng dương, khoáng chất, taurine (500mg/kg), vitamin E."
    },
    "pate-whiskas": {
        title: "Pate Whiskas Mèo Vị Gà & Phô Mai",
        price: "12.000đ", weight: "85g",
        img: "../assets/pate-whiskas.jpg",
        desc: "Thương hiệu: Whiskas. Túi pate tiện lợi vị gà và phô mai, phù hợp cho bữa ăn hàng ngày hoặc dùng làm bữa phụ. Hàm lượng nước cao giúp mèo uống đủ nước. Phù hợp mèo trưởng thành từ 1 tuổi.",
        ingredients: "Thịt và sản phẩm từ thịt gia cầm (tối thiểu 4% gà), nước, sản phẩm từ sữa, tinh bột ngô, khoáng chất, taurine (300mg/kg), vitamin D3, E."
    },
    "pate-sheba": {
        title: "Pate Sheba Vị Cá Ngừ & Tôm (Khay)",
        price: "22.000đ", weight: "85g",
        img: "../assets/pate-sheba.jpg",
        desc: "Thương hiệu: Sheba. Pate cao cấp dành cho mèo sành ăn, vị cá ngừ và tôm. Kết cấu mịn màng, không màu nhân tạo, không chất bảo quản. Bổ sung taurine và vitamin thiết yếu. Phù hợp mèo trưởng thành.",
        ingredients: "Cá ngừ (tối thiểu 26%), nước, tôm (tối thiểu 4%), tinh bột ngô biến tính, khoáng chất, taurine (500mg/kg), vitamin E, dầu cá hồi."
    },
    "pate-fancy-feast": {
        title: "Pate Fancy Feast Classic Vị Cá Hồi",
        price: "28.000đ", weight: "85g",
        img: "../assets/pate-fancy-feast.jpg",
        desc: "Thương hiệu: Fancy Feast (Purina). Pate cao cấp vị cá hồi, kết cấu mịn mượt dành cho mèo thành thục khó tính. Không chứa chất màu nhân tạo. Phong phú dinh dưỡng với protein từ cá thật.",
        ingredients: "Cá hồi, nước, thịt gia cầm, tinh bột ngô biến tính, khoáng chất, vitamin nhóm B, taurine (800mg/kg), vitamin E."
    },
    "pate-felix": {
        title: "Pate Felix Vị Gà & Rau Củ",
        price: "15.000đ", weight: "100g",
        img: "../assets/pate-felix.jpg",
        desc: "Thương hiệu: Felix (Purina). Pate dạng miếng trong sốt với rau củ giúp tăng khẩu vị. Protein từ thịt gà thật, bổ sung thêm khoáng chất và vitamin thiết yếu. Mèo con từ 3 tháng tuổi có thể dùng được.",
        ingredients: "Thịt và sản phẩm từ gia cầm (tối thiểu 12% gà), nước, rau củ (3%), tinh bột ngô biến tính, khoáng chất, taurine (500mg/kg), vitamin D3, E."
    },
    // ===== SNACK =====
    "banh-thuong-cho": {
        title: "Snack Que Mềm Chó Vị Thịt Bò",
        price: "65.000đ", weight: "100g",
        img: "../assets/banh-thuong-cho.jpg",
        desc: "Bánh thưởng dạng que mềm vị thịt bò, phù hợp huấn luyện hoặc thưởng cho chó mọi lứa tuổi. Ít calo, không chứa lúa mì phù hợp chó nhạy cảm tiêu hóa. Đóng gói có thể tái đóng tiện lợi.",
        ingredients: "Thịt bò xay (tối thiểu 30%), bột khoai tây, glycerol, tinh bột gạo, gelatin, dầu hướng dương, khoáng chất, vitamin E (chất bảo quản tự nhiên)."
    },
    "snack-xuong-nhai": {
        title: "Xương Nhai Canine Carry Outs Cho Chó",
        price: "89.000đ", weight: "170g",
        img: "../assets/snack-xuong-nhai.jpg",
        desc: "Snack dạng xương nhai mềm dẻo, giúp làm sạch răng và mảng bám tự nhiên. Vị thịt bò và phô mai hấp dẫn. Phù hợp chó từ 3 tháng tuổi. Dùng như phần thưởng hoặc đồ chơi nhai.",
        ingredients: "Tinh bột ngô, glycerol, thịt bò (4%), protein thuỷ phân, phô mai (1%), khoáng chất, nước, màu thực phẩm tự nhiên."
    },
    "snack-jerky-ga": {
        title: "Snack Jerky Ức Gà Sấy Khô Cho Chó & Mèo",
        price: "75.000đ", weight: "100g",
        img: "../assets/snack-jerky-ga.jpg",
        desc: "Ức gà sấy khô tự nhiên 100%, không chất bảo quản, không phụ gia. Nguồn protein thuần túy phù hợp cả chó và mèo. Dạng miếng dẹt dễ bẻ nhỏ khi tập luyện. Bảo quản nơi khô ráo, thoáng mát.",
        ingredients: "Ức gà (100% — không có thêm thành phần nào khác). Sấy khô ở nhiệt độ thấp bảo toàn dinh dưỡng."
    },
    "snack-dentastix": {
        title: "Snack DentaStix Sạch Răng Cho Chó",
        price: "55.000đ", weight: "180g",
        img: "../assets/snack-dentastix.jpg",
        desc: "Thương hiệu: Pedigree DentaStix. Hình que đặc biệt kết hợp thành phần làm sạch giúp giảm mảng bám và cao răng tới 80%. Sử dụng 1 que/ngày. Phù hợp chó từ 4 tháng tuổi, cân nặng 10–25kg.",
        ingredients: "Tinh bột ngô, glycerol, chất độn (E460), protein thuỷ phân, cellulose, khoáng chất, hexametaphosphate natri (làm sạch răng), dầu hướng dương."
    },
    "snack-greenies": {
        title: "Snack Greenies Sạch Răng & Hơi Thở Cho Chó",
        price: "120.000đ", weight: "130g",
        img: "../assets/snack-greenies.jpg",
        desc: "Thương hiệu: Greenies. Được khuyến nghị bởi Hội Thú Y Nha Khoa Thú Y (VOHC). Làm giảm mảng bám và cao răng, khử mùi hơi thở. Thành phần từ thiên nhiên, dễ tiêu hóa. Dùng 1 miếng/ngày cho chó 7–11kg.",
        ingredients: "Gelatine, lúa mì, glycerol, chlorophyllin đồng (E141), mùi vị thiên nhiên, khoáng chất, vitamin E, dầu hướng dương, hexametaphosphate natri."
    },
    "snack-temptations": {
        title: "Snack Temptations Cho Mèo Vị Cá Ngừ",
        price: "48.000đ", weight: "85g",
        img: "../assets/snack-temptations-meo.jpg",
        desc: "Thương hiệu: Temptations (Mars). Bánh thưởng giòn ngoài mềm trong nổi tiếng khiến mèo phát cuồng. Mỗi viên chỉ 2kcal. Dùng 15–25 viên/ngày tùy cân nặng. Nhiều vị: cá ngừ, gà, cá hồi, phô mai.",
        ingredients: "Ngũ cốc, protein thuỷ phân, chất béo động vật, bột cá ngừ (4%), khoáng chất, đường, taurine, vitamin nhóm B, màu thực phẩm tự nhiên."
    },
    "snack-zuke-meo": {
        title: "Snack Zuke's Lil' Links Mèo Vị Gà & Gan",
        price: "95.000đ", weight: "57g",
        img: "../assets/snack-zuke-meo.jpg",
        desc: "Thương hiệu: Zuke's (Mỹ). Snack cao cấp dạng que nhỏ mềm mại, nguồn protein chính là thịt gà và gan gà thật. Không ngũ cốc, không gluten. Bổ sung vitamin và khoáng chất thiết yếu. Phù hợp mèo mọi lứa tuổi.",
        ingredients: "Thịt gà (tối thiểu 40%), gan gà (8%), glycerol, tinh bột khoai tây, dầu cá hồi, khoáng chất, vitamin E, vitamin nhóm B."
    },
    "snack-milk-bone": {
        title: "Bánh Xương Milk-Bone Bổ Sung Canxi",
        price: "60.000đ", weight: "120g",
        img: "../assets/snack-milk-bone.jpg",
        desc: "Thương hiệu: Milk-Bone. Bánh thưởng hình xương kinh điển, giòn rụm, bổ sung 12 vitamin và khoáng chất. Giúp làm sạch răng nhờ kết cấu cứng. Có thể dùng làm phần thưởng trong huấn luyện. Phù hợp chó mọi kích cỡ.",
        ingredients: "Bột lúa mì, thịt gà và gia cầm thuỷ phân, sữa, muối, chất béo thực vật, canxi cacbonat, calcium phosphate, khoáng chất, vitamin A, D, E, B12."
    },
    // ===== PHỤ KIỆN =====
    "giuong-thu-cung": {
        title: "Giường Tròn Lông Mịn Cho Chó Mèo",
        price: "195.000đ", weight: "50cm",
        img: "../assets/giuong-thu-cung.jpg",
        desc: "Giường lông siêu mềm bo tròn giúp thú cưng cảm thấy an toàn ấm áp. Đệm dày 5cm tháo rời được, giặt máy thoải mái. Đế chống trượt. Phù hợp chó mèo dưới 8kg.",
        ingredients: "Chất liệu: Vải lông mịn polyester (mặt trên), vải Oxford chống thấm (đế), bông PP nhồi bên trong. Màu: Be, Xám, Hồng."
    },
    "giuong-chu-nhat": {
        title: "Giường Chữ Nhật Êm Ái Cho Chó Lớn",
        price: "240.000đ", weight: "60cm x 45cm",
        img: "../assets/giuong-chu-nhat.jpg",
        desc: "Giường chữ nhật size lớn phù hợp chó từ 8–20kg. Thành cao hai đầu tạo cảm giác ổ nằm an toàn. Vỏ bọc tháo rời giặt máy được. Đế chống trượt cao su. Phù hợp cả trong nhà lẫn ngoài trời.",
        ingredients: "Chất liệu: Vải canvas Oxford 600D (vỏ ngoài), lông microfiber mềm (lớp lót), đệm foam cao su non. Màu: Xám, Nâu, Xanh dương."
    },
    "giuong-ham-luoi": {
        title: "Giường Võng Lưới Thoáng Khí Gắn Cửa Sổ",
        price: "155.000đ", weight: "Tải max 5kg",
        img: "../assets/giuong-ham-luoi.jpg",
        desc: "Giường võng gắn cửa sổ kính bằng 4 giác hút chân không chịu lực cao. Mèo được nằm sưởi nắng thoải mái ở độ cao yêu thích. Khung kim loại bọc lưới thoáng khí, chống nước, dễ lắp ráp và tháo ra. Tải trọng tối đa 5kg.",
        ingredients: "Khung: Thép sơn tĩnh điện chống gỉ. Bề mặt: Lưới polyester thoáng khí. Giác hút: Nhựa ABS cao cấp đường kính 6cm. Kích thước: 45cm x 25cm."
    },
    "tui-deo-meo": {
        title: "Ba Lô Vận Chuyển Chó Mèo",
        price: "280.000đ", weight: "Tải max 6kg",
        img: "../assets/tui-deo-meo.jpg",
        desc: "Ba lô vận chuyển thú cưng cửa sổ lưới thoáng khí hai bên. Đai đeo vai êm có thể điều chỉnh. Phù hợp đi khám thú y, đi chơi ngắn ngày. Tải trọng tối đa 6kg.",
        ingredients: "Chất liệu: Vải Oxford 600D chống nước (ngoài), lưới thông thoáng (cửa sổ), lót nỉ mềm (trong). Kích thước: 28 x 20 x 40cm. Màu: Xanh, Đen, Cam."
    },
    "balo-trong-suot": {
        title: "Ba Lô Trong Suốt Space Capsule Cho Mèo",
        price: "350.000đ", weight: "Tải max 6kg",
        img: "../assets/balo-trong-suot.jpg",
        desc: "Ba lô hình viên nang vũ trụ độc đáo, mặt trước trong suốt giúp mèo quan sát xung quanh thoải mái. Thiết kế thời trang hiện đại. Nắp mở rộng dễ đưa mèo vào/ra. Lỗ thông khí nhiều phía đảm bảo thoáng khí.",
        ingredients: "Khung ngoài: Nhựa ABS trong suốt chịu lực. Phần vai và lưng: Vải lưới EVA thoáng khí có đệm xốp. Trong: Lót vải nỉ mềm có thể tháo giặt. Kích thước: 35 x 25 x 42cm."
    },
    "long-cho-meo": {
        title: "Lồng Sắt Cửa Đơn Cho Chó Mèo Nhỏ",
        price: "420.000đ", weight: "60 x 40 x 45cm",
        img: "../assets/long-cho-meo.jpg",
        desc: "Lồng sắt sơn tĩnh điện chống gỉ, phù hợp nuôi nhốt tạm thời khi di chuyển hoặc ban đêm. Cửa đơn có khóa chốt an toàn. Khay đáy nhựa dễ tháo vệ sinh. Có thể gấp gọn khi không sử dụng.",
        ingredients: "Khung: Thép sơn tĩnh điện chống gỉ 1.2mm. Khay đáy: Nhựa PP không mùi. Kích thước: 60cm (D) x 40cm (R) x 45cm (C). Tải trọng tối đa: 8kg."
    }
};
 
if (productType && data[productType]) {
    const p = data[productType];
    document.getElementById('prod-title').innerText = p.title;
    document.getElementById('prod-price').innerText = p.price;
    document.getElementById('prod-weight').innerText = p.weight;
    document.getElementById('prod-img').src = p.img;
    document.getElementById('prod-img').alt = p.title;
    document.getElementById('prod-desc').innerText = p.desc;
    document.getElementById('prod-ingredients').innerText = p.ingredients;
    document.title = p.title + " - Sunshine Shop";
} else {
    document.getElementById('prod-title').innerText = "Sản phẩm không tìm thấy";
    document.getElementById('prod-desc').innerText = "Vui lòng quay lại trang sản phẩm.";
}