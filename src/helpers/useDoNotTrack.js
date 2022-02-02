const useDoNotTrack = () => {
  if (!(navigator.doNotTrack || window.doNotTrack)) return false;
  return window.doNotTrack === "1" ||
    navigator.doNotTrack === "1" ||
    navigator.doNotTrack === "yes"
    ? true
    : false;
};

export default useDoNotTrack;
