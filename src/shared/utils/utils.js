export const sanitizeImgFormat = (imgStr, format) => {
  const split = imgStr.split('.');
  if (split[split.length - 1] !== format) {
    return imgStr.replace(split[split.length - 1], format);
  }
  return imgStr;
}