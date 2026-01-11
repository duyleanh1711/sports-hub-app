const FieldMap = () => {
  return (
    <div className="space-y-2 rounded-lg bg-white p-4 md:p-6">
      <h2 className="text-lg md:text-xl font-bold">Xem trên bản đồ</h2>
      <iframe
        title="Bản đồ sân bóng"
        src="https://www.google.com/maps?q=26%20Xô%20Viết%20Nghệ%20Tĩnh,%20Phường%207,%20Đà%20Lạt,%20Lâm%20Đồng&output=embed"
        className="h-60 md:h-100 w-full rounded-lg"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default FieldMap;
