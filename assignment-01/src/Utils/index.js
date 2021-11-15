export const formatText = (text, maxLength) => {
    const length = text.length;
    let prefix = text;
    if (length > maxLength) {
      prefix = text.substring(0, maxLength) + "...";
    }
    return prefix;
};