const wrapper = (...childrens) => {
  const fragment = document.createDocumentFragment();
  childrens.forEach((node) => {
    fragment.appendChild(node);
  });
  return fragment;
};
