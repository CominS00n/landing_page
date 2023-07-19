<template>
  <profile-card
    imagePath="https://i.imgur.com/HskfL7B.jpg"
    headerText="ประวัติส่วนตัว"
    text="นายสิทธิชัย พักโพธิ์(ป๊อป) อายุ 21 ที่อยู่ 23/1 หมู่ 6 ต.บึงทองหลาง อ.ลำลูกกา จ.ปทุมธานี 12150
          กำลังศึกษาระดับปริญญาตรีที่ มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี คณะวิทยาศาสตร์และเทคโนโลยี สาขาเทคโนโลยีสารสนเทศ"
  />
  <profile-card
    imagePath="https://i.imgur.com/U67R4WO.jpg"
    headerText="AI Mood Detection:Smart Home"
    text="สำหรับโปรเจ็คจบของผม(ทำกับเพื่อนอีก 2 คน)คือ AI Mood Detection:Smart Home เป็นระบบ IoT ที่ Detection หน้าของผู้ใช้งานโดยใช้ AI 
    มาประยุกต์ในการตรวจจับอารมณ์ของผู้ใช้งานโดยจำแนกออกเป็น 4 อารมณ์ คือ เศร้า ดีใจ ตกใจและโกรธ จากนั้น AI จะส่งผลที่ได้
    จากการตรวจจับส่งเข้าสู่ระบบ Smart Home เพื่อเปลี่ยนแสงไฟในห้องและเปิดเพลงเพื่อปรับอารมณืของผู้ใช้งานให้เข้าสู่สภาพปกติ"
  />
  <profile-card
    imagePath="https://i.imgur.com/uVIXmB7.jpg"
    headerText="งานอดิเรก"
    text="งานอดิเรกคือสิงอยู่คนเดียวใน Discord รอเพื่อนชวนเล่นเกม แต่ไม่มีเพื่อนเล่น ถนัดเล่นเกมแนว FPS และ Survival 
    เช่น PUBG, Apex, Valorant, Minecraft ส่วนมากเพื่อนจะชอบเรียกว่า 'ComingS00n' ตามชื่อในเกม
    ไม่ก็เรียกว่า 'ตุ่น' ตามสกินใน minecraft ไม่เข้าใจจริงๆทำไมไม่เรียกชื่อเล่นกัน"
  />
</template>

<script>
import ProfileCard from '@/components/ProfileCard.vue'

export default {
  name: 'AboutMe',
  components: {
    ProfileCard
  }
}
</script>
