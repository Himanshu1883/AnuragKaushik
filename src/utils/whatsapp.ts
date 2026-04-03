type WhatsappData = {
  name?: string;
  category?: string;
  price?: number;
  duration?: string;
};

export const sendToWhatsapp = (data: WhatsappData): void => {
  const message = `Hi, I am interested:

${data.name ? `Service: ${data.name}` : ""}
${data.category ? `Category: ${data.category}` : ""}
${data.price ? `Price: Rs. ${data.price}` : ""}
${data.duration ? `Duration: ${data.duration}` : ""}

Please share details.`;

  const url = `https://wa.me/919821936847?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};