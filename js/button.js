class Button {
   _text = '';
   _callback = null;
   _itemClass = ''

   constructor(text, callback, itemClass) {
      this._text = text;
      this._callback = callback;
      this._itemClass = itemClass
   }

   onBtnClick() {
      const callback = this._callback
      if(typeof callback === 'function') {
         callback()
      }
   }

   getTemplate() {
      const btn = document.createElement('button');
      btn.classList.add(this._itemClass);

      return btn;
   }

   render(placeToRender) {
      if(placeToRender) {
         const btn = this.getTemplate(this._itemClass);
         btn.innerHTML = this._text;
         placeToRender.appendChild(btn);

         btn.addEventListener('click', () => {
            this.onBtnClick()
         })
      }
   }
}