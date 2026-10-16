export interface ArticleBlock {
  h?: string
  p?: string
  ul?: string[]
}

export interface Article {
  icon: string
  type: string
  title: string
  desc: string
  body: ArticleBlock[]
}

export const articles: Article[] = [
  {
    icon: 'doc', type: 'Evaluation guide',
    title: 'What to ask before choosing a school ERP',
    desc: 'A practical checklist for a more useful software demonstration.',
    body: [
      { p: "A useful evaluation begins with your school's workflows. List the tasks that create repeated work or leave important information unclear." },
      { h: '1. Bring real scenarios', ul: [
        'Can we follow one student from admission to fees, assessment and behaviour?',
        'Can the finance team produce the class-wise reports our principal uses?',
        'Can teachers find their planning, homework and assessment work in one place?',
      ] },
      { h: '2. Check fit, not just features', p: 'Ask which capabilities are included in your proposed plan. Discuss campuses, user roles, curriculum structure and specialised needs such as Hifz or Tarbiyah.' },
      { h: '3. Understand the commitment', p: 'Confirm pricing, taxes, billing dates, cancellation terms, support coverage and any setup or migration work in writing.' },
      { h: '4. Ask about your information', p: 'Discuss access permissions, hosting, backups, exports and how the school retrieves its records if it leaves.' },
      { h: '5. Define a useful pilot', p: 'Choose a small group of staff, a real workflow and a clear review date. Assess whether the tool makes the work clearer before widening adoption.' },
    ],
  },
  {
    icon: 'people', type: 'Getting started',
    title: 'Prepare your team for a connected school',
    desc: 'A simple starting plan for records, responsibilities and adoption.',
    body: [
      { p: 'Implementation is an organisational change. Start by agreeing ownership and preparing consistent information.' },
      { h: 'Before setup', ul: [
        'Name a school lead and one owner for each initial workflow.',
        'Review student names, admission identifiers, classes and sections.',
        'Check guardian details and sibling connections.',
        'Agree the academic year, campus structure and staff roles.',
      ] },
      { h: 'Start with a focused scope', p: 'Choose the first workflows with your team. Record what success looks like, who will review the output and how staff will raise questions.' },
      { h: 'Build a daily rhythm', p: 'Give staff a short practical orientation using their actual tasks. Check records regularly and keep a shared list of issues to discuss with support.' },
      { h: 'Review before expanding', p: 'Verify the first reports and access permissions. Expand only when staff can consistently complete the initial workflows.' },
    ],
  },
  {
    icon: 'heart', type: 'School leadership',
    title: 'Bring character into the student conversation',
    desc: 'Connect academic records with purposeful development and family partnership.',
    body: [
      { p: 'A whole-child view helps a school consider learning alongside behaviour, responsibility and personal growth.' },
      { h: 'Record observations with context', p: "Use specific, observable descriptions. Separate the action observed from assumptions about a child's intention or personality." },
      { h: 'Support development, not labelling', p: 'Records should help teachers recognise progress, coordinate support and agree constructive next steps with families.' },
      { h: 'Make values practical', p: "For Tarbiyah-oriented schools, link values to everyday responsibilities and habits. Hifz, Nazrah and Salah records can support follow-up without claiming to measure a learner's sincerity or spiritual worth." },
      { h: 'Review access thoughtfully', p: "Agree which staff need access to sensitive observations. Keep conversations respectful and focused on the child's growth." },
    ],
  },
]
