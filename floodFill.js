const spread = (image, sr, sc, color) => {

  if (sr< 0 || sc <0 || sr >= image.length || sc >= image[0].length) {
    return image;
  }
  
  if (image[sr][sc] === color) {
    return image
  }
  
  image[sr][sc] = color;

  spread(image, sr +1, sc, color);
  spread(image, sr-1, sc, color);
  spread(image, sr, sc -1, color);
  spread(image, sr, sc +1 , color)

  return image;
}

const floodFill = (image,sr,sc,color) => {
  return spread(image, sr, sc,color)
}

console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2), [[2,2,2],[2,2,0],[2,0,1]]);



