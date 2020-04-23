module.exports = {
  onInit: ({ inputs }) => {
    console.log('onInit Running...');
  },
  onPreBuild: ({ inputs }) => {
    console.log('onPreBuild Running...');
  },
  onBuild: ({ inputs }) => {
    console.log('onBuild Running...');
  },
  onPostBuild: ({ inputs }) => {
    console.log('onPostBuild Running...');
  },
  onSuccess: ({ inputs }) => {
    console.log('onSuccess Running...');
  },
  onError: ({ inputs }) => {
    console.log('onError Running...');
  },
  onEnd: ({ inputs }) => {
    console.log('onEnd Running...');
  },
};
