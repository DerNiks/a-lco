export interface TeamMember {
  id: string;
  name: string;
  cname: string;
  title: { en: string; cn: string };
  image: string;
  bgColor: string;
  bio: { en: string; cn: string };
  practiceAreas: { en: string[]; cn: string[] };
  education: { en: string[]; cn: string[] };
}

export const teamMembers: TeamMember[] = [
  {
    id: "antoni-yeo",
    name: "Antoni Yeo S.H., M.Kn",
    cname: "(杨桠兴)",
    title: { en: "Founder & President", cn: "创始人兼总裁" },
    image: "/anthony.jpg",
    bgColor: "bg-brand-orange",
    bio: {
      en: "He is an expert in business law, company law, criminal law, and other areas of law. He is a qualified lawyer and curator.",
      cn: "他是商业法、公司法、刑法和其他法律领域的专家。他是一名合格的律师和馆长。",
    },
    practiceAreas: {
      en: [
        "Business Law",
        "Company Law",
        "Criminal Law",
        "Bankruptcy & Curator",
      ],
      cn: ["商业法", "公司法", "刑法", "破产与策展人"],
    },
    education: {
      en: ["Bachelor of Laws (S.H.)", "Master of Notary (M.Kn.)"],
      cn: ["法学学士 (S.H.)", "公证硕士 (M.Kn.)"],
    },
  },
  {
    id: "joni-zhang",
    name: "Joni Zhang, S.S.T., M.A., BKP",
    cname: "(张明俊)",
    title: { en: "Co-Founder & Associate", cn: "联合创始人兼副总裁" },
    image: "/joni.png",
    bgColor: "bg-brand-orange",
    bio: {
      en: "He is an expert in accounting, bookkeeping, and taxation matters. He is a qualified tax consultant.",
      cn: "他是会计、簿记和税务方面的专家。他是一名合格的税务顾问。",
    },
    practiceAreas: {
      en: ["Accounting", "Bookkeeping", "Taxation"],
      cn: ["会计", "簿记", "税务"],
    },
    education: {
      en: [
        "Bachelor of Applied Science (S.S.T.)",
        "Master of Arts (M.A)",
        "Bachelor of Laws (Candidate)",
      ],
      cn: ["应用科学学士 (S.S.T.)", "文学硕士 (M.A)", "法学学士 (候选人)"],
    },
  },
  {
    id: "eko-kurniawan",
    name: "Eko Kurniawan S.H., M.H",
    cname: "(埃科)",
    title: {
      en: "Senior Partner, Lawyer, Legal Consultant",
      cn: "资深合伙人, 律师及法律顾问",
    },
    image: "/eko.jpg",
    bgColor: "bg-brand-blue",
    bio: {
      en: "Eko is a leading trial advocate with a broad practice in state administrative, commercial dispute, private dispute, and criminal dispute. He helps clients in Indonesian district, higher, and supreme court proceedings all over Indonesia.",
      cn: "Eko 是一名领先的出庭辩护律师，在国家行政、商业纠纷、私人纠纷和刑事纠纷方面拥有广泛的执业经验。他在印尼各地的地区法院、高等法院和最高法院诉讼中为客户提供帮助。",
    },
    practiceAreas: {
      en: [
        "State Administrative Law",
        "Commercial Dispute",
        "Private Dispute",
        "Criminal Dispute",
      ],
      cn: ["国家行政法", "商业纠纷", "私人纠纷", "刑事纠纷"],
    },
    education: {
      en: ["Bachelor of Laws (S.H.)"],
      cn: ["法学学士 (S.H.)"],
    },
  },
  {
    id: "dedy-febriyanto-thang",
    name: "Deddy Febriyanto Tjhang S.H",
    cname: "(曾财光)",
    title: { en: "Senior Partner", cn: "资深合伙人" },
    image: "/dedy.jpg",
    bgColor: "bg-brand-blue",
    bio: {
      en: "He is an expert in business law and corporate law with a broad practical experience in handling foreign direct investment companies in Indonesia.",
      cn: "他是商法和公司法方面的专家，在处理印度尼西亚的外国直接投资公司方面拥有丰富的实践经验。",
    },
    practiceAreas: {
      en: ["Business Law", "Corporate Law", "Foreign Direct Investment"],
      cn: ["商业法", "公司法", "外国直接投资"],
    },
    education: {
      en: ["Bachelor of Laws (S.H.)"],
      cn: ["法学学士 (S.H.)"],
    },
  },
  {
    id: "stanley-lee",
    name: "Stanley Lee",
    cname: "(李政偉)",
    title: { en: "Paralegal", cn: "律师助理" },
    image: "/stanley.jpg",
    bgColor: "bg-brand-blue",
    bio: {
      en: "He is highly skilled and proficient in the administration of law in matters of litigation and non-litigation. Apart from being responsible, he is also very thorough with documents.",
      cn: "他在诉讼和非诉讼事务方面具有高超的技能，精通法律。除了认真负责，他对文件的处理也非常周全。",
    },
    practiceAreas: {
      en: ["Legal Administration", "Litigation Support", "Document Review"],
      cn: ["法律行政", "诉讼支持", "文件审查"],
    },
    education: {
      en: ["Bachelor of Laws (S.H.) Candidate"],
      cn: ["法学学士 (S.H.) 候选人"],
    },
  },
  {
    id: "haris-padli",
    name: "Haris Padli S.H., M.H",
    cname: "(哈里斯)",
    title: { en: "Lawyer, Legal Consultant", cn: "律师及法律顾问" },
    image: "/padli.jpg",
    bgColor: "bg-brand-blue",
    bio: {
      en: "Professional Lawyers Litigation and Non Litigation, Constitutional Law, Criminal Law, Drafting Company Legal Regulations, Legal Auditor, and Legal Practitioner.",
      cn: "专业领域包括诉讼与非诉讼法律实务、宪法法、刑法、公司法律法规起草、法律审计及法律实务。",
    },
    practiceAreas: {
      en: [
        "Litigation & Non-Litigation",
        "Constitutional Law",
        "Criminal Law",
        "Legal Drafting & Audit",
      ],
      cn: ["诉讼与非诉讼", "宪法", "刑法", "法律起草与审计"],
    },
    education: {
      en: [
        "Bachelor of Laws (S.H)",
        "Master of Laws (M.H)",
        "Master of Law, Islamic University of Indonesia Yogyakarta",
      ],
      cn: [
        "法学学士 (S.H)",
        "法学硕士 (M.H)",
        "印度尼西亚伊斯兰大学(日惹校区)法学硕士",
      ],
    },
  },
  {
    id: "syahman-pangihutan-haloho",
    name: "Syahman Pangihutan Haloho S.H",
    cname: "(夏曼)",
    title: { en: "Lawyer, Legal Consultant", cn: "律师及法律顾问" },
    image: "/syahman.jpg",
    bgColor: "bg-brand-blue",
    bio: {
      en: "A lawyer with specialized expertise and experience in cases involving Debt Payment Obligation Deferral and Bankruptcy. Additionally, he has experience both in and out of court regarding general civil cases, Debt Settlement, Criminal Cases at the Police, Prosecutor's Office, District Court, High Court, Supreme Court levels, as well as the drafting of Company Regulations and Contracts.",
      cn: "一名具备专业技能和经验的律师，专精于债务偿还义务延期及破产案件。此外，在民事诉讼、债务清偿、刑事案件，无论是在法院内还是法院外，均具备丰富经验，涉及警察局、检察机关、地方法院、高等法院、最高法院等司法机构，以及公司规章制度和合同起草等领域。",
    },
    practiceAreas: {
      en: [
        "Bankruptcy & Debt Payment Deferral",
        "General Civil Cases",
        "Criminal Litigation",
        "Contract Drafting",
      ],
      cn: ["破产与债务延期", "一般民事案件", "刑事诉讼", "合同起草"],
    },
    education: {
      en: ["Bachelor of Laws (S.H)"],
      cn: ["法学学士 (S.H)"],
    },
  },
  {
    id: "zoey",
    name: "Zoeys",
    cname: "(史恩嘉)",
    title: { en: "Admin", cn: "行政" },
    image: "/zoey.jpg",
    bgColor: "bg-brand-blue",
    bio: {
      en: "Expert in business law, notarial law, and contract law. A qualified lawyer dedicated to providing excellent legal services.",
      cn: "他是商业法、公证法和合同法方面的专家。他是一名副教授和合格律师，目前还在为担任公证员进行实习。",
    },
    practiceAreas: {
      en: ["Business Law", "Contract Law", "Notarial Law"],
      cn: ["商业法", "合同法", "公证法"],
    },
    education: {
      en: ["Bachelor of Laws (S.H.)"],
      cn: ["法学学士 (S.H.)"],
    },
  },
];
