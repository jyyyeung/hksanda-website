import{i as s}from"./entry.88acea7e.js";const l=s`
    query GetAssessmentSyllabusQuery {
        getAssessmentSyllabus {
            syllabus
            level
            id
        }
    }
`,t=s`
    mutation UpdateAssessmentSyllabusMutation($level: SyllabusInput) {
        updateAssessmentSyllabus(level: $level) {
            id
            level
            syllabus
        }
    }
`;export{l as G,t as M};