class Resizer {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  resize(image) {
    const imageRatio = image.width / image.height;

    const scaleWidth = 1 / (image.width / this.width);
    const scaleHeight = 1 / (image.height / this.height);

    const ratio = imageRatio > 1 ? scaleWidth : scaleHeight;

    image.width = image.width * ratio;
    image.height = image.height * ratio;

    return image;
  }
}


export default (element) => {
  return {
    load(myImage, width = myImage.width, height = myImage.height) {
      const resizer = new Resizer(width, height);
      return new window.Promise((resolve, reject) => {
        const image = new window.Image();

        image.onload = () => resolve(image);

        image.onerror = reject;

        image.src = myImage.url;
      }).then((img) => resizer.resize(img)).then((img) => element.parentNode.replaceChild(img, element));
    }
  };
};
