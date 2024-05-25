document.getElementById("demoButton").addEventListener("click", function () {
  const demoImagesContainer = document.getElementById("demoImages");
  demoImagesContainer.innerHTML = "";

  const images = [
    "image1.jfif", // Replace with actual image paths
    "image2.jfif",
    "image3.jfif",
    "image4.jfif",
    "image5.jfif",
    "image6.jfif",
    "image7.jfif",
  ];

  if (images.length === 0) {
    demoImagesContainer.innerHTML = "<p>No images available.</p>";
  } else {
    images.forEach((src) => {
      const img = document.createElement("img");
      img.src = src;
      demoImagesContainer.appendChild(img);
    });
  }
});

// Toggle menu for mobile view
const menuToggle = document.getElementById("menuToggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});
