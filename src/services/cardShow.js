
import { defineStore } from 'pinia';
import { ref } from 'vue';

import { useGoTo } from 'vuetify';



export const useCardShowStore = defineStore('contactShow', () => {

  const goTo = useGoTo()

  // 定義滾動到頂部的函數
  const scrollToElement = (element) => {
    if (element) {
      goTo(element, { duration: 500, easing: 'easeInOutCubic' });
    }else console.log("沒成功")
  };

  const contactShow = ref(true);//後來沒使用了
  const educationShow = ref(true);//後來沒使用了

  const contactcard = ref(null);
  const educationcard = ref(null);


  const contactCardShow = () => {
    // contactShow.value = !contactShow.value;
    scrollToElement(contactcard.value);
  };
  const educationCardShow = () => {
    // educationShow.value = !educationShow.value;
    scrollToElement(educationcard.value);
  };
  return { contactShow, educationShow,contactcard,educationcard, contactCardShow, educationCardShow };
});
