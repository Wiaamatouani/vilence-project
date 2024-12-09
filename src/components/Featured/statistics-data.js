export interface Statistic {
  title: string;
  value: string;
  description: string;
  image: string;
}

export const statistics: Statistic[] = [
  {
    title: "Intimate Partner Violence",
    value: "1 in 3",
    description: "Globally, one-third of women have experienced physical or sexual violence, with the majority of cases perpetrated by an intimate partner. This staggering statistic underscores the pervasive nature of gender-based violence, transcending cultural, economic, and geographical boundaries.",
    image: "https://images.unsplash.com/photo-1507215210622-539686c4bfaa?auto=format&fit=crop&q=80"
  },
  {
    title: "Trafficking Victims",
    value: "71%",
    description: "Women and girls represent a shocking 71% of human trafficking victims worldwide, enduring harrowing forms of exploitation and abuse. Many are forced into sexual slavery, domestic servitude, or exploitative labor.",
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80"
  },
  {
    title: "Child Marriage",
    value: "12M",
    description: "Each year, an alarming 12 million girls worldwide are married before the age of 18, robbing them of their childhood, educational opportunities, and future prospects.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80"
  },
  {
    title: "Economic Cost",
    value: "$1.5T",
    description: "Violence against women comes at a staggering global cost of $1.5 trillion annually, which is approximately 2% of the world's GDP.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80"
  }
];