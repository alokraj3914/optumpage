import Container from "./ExploreCard";
import "./AllCards.css";

const AllCards = () => {
  const cards = [
    {
      title: "A/R Recovery and Denial Management",
      desc: "Our A/R recovery and denial management solutions optimize your RCM workflow.",
      link: " View Details →"
    },
    {
      title: "Absolute AR",
      desc: "A suite of pharmacy revenue cycle management solutions that brings clarity and transparency to third-party submission and reconciliation.",
      link: "View Details →"
    },
    {
      title: "Absolute AR",
      desc: "A suite of pharmacy revenue cycle management solutions that brings clarity and transparency to third-party submission and reconciliation.",
      link: "View Details →"
    },
    {
      title: "Acuity Revenue Cycle Analytics™",
      desc: "Our analytics-driven revenue cycle management software to help you make decisions impacting outcomes, productivity and patient experiences.",
      link: "View Details →"
    },
    {
      title: "Ambulatory Revenue Cycle Management Services ",
      desc: "RCM and billing services help physicians improve cash flow, increase speed to payment, contain costs at a faster rate, and support growth at scale.",
      link: "View Details →"
    },
     {
      title: "Ambulatory Revenue Cycle Technology",
      desc: "Get end-to-end, automated revenue performance solutions to optimize cash flow, streamline workflows and improve patient experience.",
      link: "View Details →"
    },
     {
      title: "Analytics Consulting",
      desc: "We can improve your business performance through our industry-leading health care analytic advisors, the largest care databases and tools.",
      link: "View Details →"
    },
     {
      title: "Analytics performance",
      desc: "Drive growth, financial performance and clinical excellence with actionable data and analytics through technology and managed services.",
      link: "View Details →"
    },
     {
      title: "Ancillary Benefits Management",
      desc: "Reduce the burden of managing ancillary benefits programs separately across the care continuum. Our solutions leverage an affordability framework to close gaps for better care with lower costs.",
      link: "View Details →"
    },
    {
      title: "Assurance Reimbursement Management",
      desc: "Effectively automate your workflows to help prevent denials and facilitate fast reimbursement.",
      link: "View Details →"
    },
    {
      title: "Assured Access: Rapid Resource Deployment in Emergencies",
      desc: "We help you bridge the gap between preparedness, response and recovery so you’re ready for emergencies and public health crises.",
      link: "View Details →"
    },
    {
      title: "Audit Services",
      desc: "Comprehensive solutions and support services to assist health plans in completing various audits established by CMS, HHS and the OIG.",
      link: "View Details →"
    },
    {
      title: "Authorization Management Services",
      desc: "Improve medical authorization management by leveraging expert staffing, intelligent automation and broad connectivity.",
      link: "View Details →"
    },
    {
      title: "Auto Insurance Claims",
      desc: "Maximize satisfaction and ROI by moving policyholders and service providers to electronic options.",
      link: "View Details →"
    },
    {
      title: "Bariatric Resource Services",
      desc: "We help reduce medical expenses associated with bariatric surgery and provide support for your members, their family members and caregivers.",
      link: "View Details →"
    },
    {
      title: "Be a Part of Our Clinical Community",
      desc: "Join a healthcare partnership, built on a network of over 60,000 physicians, that can transform the way you deliver care.",
      link: "View Details →"
    },
    {
      title: "Behavioral health and emotional wellbeing solutions",
      desc: "We guide adults, youth and caregivers to the right support and care for their unique needs across a full range of mental health tools and solutions.",
      link: "View Details →"
    },
{
      title: "Behavioral Health Solutions for Employers",
      desc: "Providing employees with convenient access to effective behavioral health resources.",
      link: "View Details →"
    },
{
      title: "Behavioral Health Solutions for Health Plans",
      desc: "Guide members to the right mental health care using advanced analytics and digital and local resources.",
      link: "View Details →"
    },
    {
      title: "Behavioral Health Solutions for Military and Veterans",
      desc: "Optum Serve is proud to offer evidence-based behavioral health solutions that support the needs of beneficiaries and their dependents.",
      link: "View Details →"
    },
    {
      title: "Behavioral Health Solutions for State Governments",
      desc: "Our targeted interventions and complex care management help to enhance patient experience, lower costs and improve outcomes.",
      link: "View Details →"
    },
    {
      title: "Behavioral Programs for the Justice-Involved",
      desc: "Optum helps direct people with behavioral health disorders in the criminal justice system to appropriate clinical and support services.",
      link: "View Details →"
    },
     {
      title: "Benefits Analytic Manager",
      desc: "Our integrated data and analytics solution for employers puts you in control of your data to inform strategy and manage benefits.",
      link: "View Details →"
    },
     {
      title: "Biometric Screenings and Vaccinations",
      desc: "Biometric screenings and vaccination offerings keep members engaged in their health.",
      link: "View Details →"
    },
     {
      title: "Brokers and Consultants",
      desc: "Gain a competitive edge by connecting your clients with innovative, best-in-class and cost-effective Optum solutions.",
      link: "View Details →"
    },



  ];
     return (
    <section className="footer-section">
      <h1 className="section-subtitle">Current customer resources</h1>
      <p className="section-title">Explore helpful resources and get support.</p>
      <div className="card-container">
        {cards.map((card, index) => (
          <Container key={index} {...card} />
        ))}
      </div>
    </section>
  );

};

export default AllCards;
