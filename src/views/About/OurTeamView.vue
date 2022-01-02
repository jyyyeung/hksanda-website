<template>
  <div class="p-fluid">
    <h1>專業教練團隊</h1>
    <Card class="card" v-for="instructor in instructors" :key="instructor.name">
      <template #title>{{ instructor.name }}</template>
      <template #subtitle> {{ instructor.strengths }} </template>
      <template #content>
        <p
          v-for="(cert, i) in instructor.certificates"
          :key="cert.organization + cert.content + i"
        >
          <Tag :value="cert.organization"></Tag> {{ cert.content }}
        </p>
      </template>
      <template #footer>
        <p
          v-for="experience in instructor.experiences"
          :key="instructor + experience"
        >
          {{ experience }}
        </p>
      </template>
    </Card>
    <h2>持有認可實用自衛散手段位証書</h2>
    <Accordion>
      <AccordionTab v-for="rank in ranks" :key="rank.name" :header="rank.name">
        <Tag
          v-for="awardee in rank.awardees"
          :key="awardee"
          :value="awardee"
        ></Tag>
      </AccordionTab>
    </Accordion>
  </div>
</template>

<script>
export default {
  name: "OurTeamView",
  data: function () {
    return {
      instructors: [
        {
          name: "傅潤車",
          strengths: "散手自衛術/泰拳Boxing/女子自衛術課程",
          certificates: [
            {
              organization: "香港極拳道武術協會",
              content: "總教練 散手自衛術七段 教練委員會主席",
            },
            {
              organization: "國家體育總局 中國武術協會",
              content: "防身自衛術三段專業證書",
            },
            {
              organization: "香港武術聯會",
              content: "註冊持牌一級散手教練/專業證書",
            },
            {
              organization: "香港武術聯會",
              content: "註冊持牌一級散手裁判/專業證書",
            },
            {
              organization: "香港拳擊總會",
              content: "準一級專業拳擊教練証書",
            },
            {
              organization: "澳洲專業教練學院(ATFP)",
              content: "註冊一级泰拳專業教練",
            },
            {
              organization: "澳洲專業教練學院(ATFP)",
              content: "註冊kick Boxing專業教練",
            },
            {
              organization: "澳洲專業教練學院(ATFP)",
              content: "註冊一級體適能運動教練",
            },
            {
              organization: "香港太極總會",
              content: "持牌太極拳教練/師資訓練班畢業證書",
            },
            {
              organization: "香港聖約翰救傷會",
              content: "成人急救証書",
            },
          ],
          experiences: [
            "具備十多年豐富的私人及團體班課程教授經驗",
            "可教國家規定防身自衛術動作，讓學員考取國家認可專業資格證書",
          ],
        },
      ],
      ranks: [
        {
          name: "散手四段證書",
          awardees: ["Frank"],
        },
        {
          name: "散手三段證書",
          awardees: ["馮偉釗", "Fanny", "Winbe"],
        },
        {
          name: "散手二段證書",
          awardees: ["黃齊樂", "林榮輝"],
        },
        {
          name: "散手一段證書",
          awardees: [
            "丁梓平",
            "何彥昌",
            "何偉基",
            "黃禮榮",
            "蔡宏穎",
            "馮俊豪",
            "朱威",
            "李金澤",
            "林均緣",
            "屈志強",
            "李亞美",
            "馮俊傑",
            "梁善恒",
            "張健興",
          ],
        },
        {
          name: "散手 名譽一段",
          awardees: [
            "柯秀明",
            "賴燕開",
            "林鑫鴻",
            "陳少遠",
            "李龍恒",
            "薛原",
            "陳天運",
            "陳權輝",
            "鄭卓軒",
            "張奕愷",
          ],
        },
      ],
    };
  },
};
</script>
