import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export type FormDataType = {
  name: string;
  phone: string;
  movingFrom: string;
  movingTo: string;
  message?: string;
};

interface MoversEmailProps {
  formData: FormDataType;
}

export const MoversEmail = ({ formData }: MoversEmailProps) => {
  const { name, phone, movingFrom, movingTo, message } = formData;

  const submittedAt = new Date().toLocaleDateString("en-AE", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <Html lang="en" dir="ltr">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=DM+Serif+Display&display=swap');
        `}</style>
      </Head>
      <Preview>
        New moving enquiry from {name} — {movingFrom} → {movingTo}
      </Preview>

      <Body style={styles.body}>
        {/* ── Outer wrapper ── */}
        <Container style={styles.outerContainer}>
          {/* ── Header ── */}
          <Section style={styles.header}>
            <Row style={{ display: "flex", flexWrap: "wrap" }}>
              <Column>
                <Img
                  src="https://moversandpackersinuae.vercel.app/logo-white.svg"
                  alt="Movers & Packers in UAE"
                  height={40}
                  style={styles.logo}
                />
              </Column>
            </Row>
          </Section>

          {/* ── Red accent bar ── */}
          <Section style={styles.accentBar} />

          {/* ── Hero block ── */}
          <Section style={styles.heroSection}>
            <Text style={styles.heroEyebrow}>MOVING REQUEST</Text>
            <Heading as="h1" style={styles.heroHeading}>
              {name}
            </Heading>
            <Text style={styles.heroSub}>Submitted on {submittedAt}</Text>
          </Section>

          {/* ── Details section ── */}
          <Section style={styles.detailsSection}>
            <Heading as="h2" style={styles.sectionHeading}>
              Contact Details
            </Heading>
            <Hr style={styles.divider} />

            {/* Name row */}
            <Row style={styles.detailRow}>
              <Column style={styles.detailLabelCol}>
                <Text style={styles.detailLabel}>Full Name</Text>
              </Column>
              <Column style={styles.detailValueCol}>
                <Text style={styles.detailValue}>{name}</Text>
              </Column>
            </Row>
            <Hr style={styles.rowDivider} />

            {/* Phone row */}
            <Row style={styles.detailRow}>
              <Column style={styles.detailLabelCol}>
                <Text style={styles.detailLabel}>Phone</Text>
              </Column>
              <Column style={styles.detailValueCol}>
                <Text style={styles.detailValue}>{phone}</Text>
              </Column>
            </Row>
            <Hr style={styles.rowDivider} />

            {/* Moving From row */}
            <Row style={styles.detailRow}>
              <Column style={styles.detailLabelCol}>
                <Text style={styles.detailLabel}>Moving From</Text>
              </Column>
              <Column style={styles.detailValueCol}>
                <Text style={styles.detailValue}>{movingFrom}</Text>
              </Column>
            </Row>
            <Hr style={styles.rowDivider} />

            {/* Moving To row */}
            <Row style={styles.detailRow}>
              <Column style={styles.detailLabelCol}>
                <Text style={styles.detailLabel}>Moving To</Text>
              </Column>
              <Column style={styles.detailValueCol}>
                <Text style={styles.detailValue}>{movingTo}</Text>
              </Column>
            </Row>
          </Section>

          {/* ── Message section (conditional) ── */}
          {message && (
            <Section style={styles.messageSection}>
              <Heading as="h2" style={styles.sectionHeading}>
                Additional Message
              </Heading>
              <Hr style={styles.divider} />
              <Text style={styles.messageText}>{message}</Text>
            </Section>
          )}

          {/* ── CTA strip ── */}
          <Section style={styles.ctaStrip}>
            <Row>
              <Column>
                <Text style={styles.ctaLabel}>RESPOND PROMPTLY</Text>
                <Text style={styles.ctaText}>
                  Reply to this enquiry within 10 minutes for the best
                  conversion rate.
                </Text>
              </Column>
              <Column align="right" style={{ width: "120px" }}>
                <a href={`tel:${phone}`} style={styles.ctaBadge}>
                  Call Customer
                </a>
              </Column>
            </Row>
          </Section>

          {/* ── Footer ── */}
          <Section style={styles.footer}>
            <Row>
              <Column>
                <Img
                  src="https://moversandpackersinuae.vercel.app/logo-white.svg"
                  alt="Movers & Packers in UAE"
                  height={28}
                  style={{ opacity: 0.6 }}
                />
              </Column>
            </Row>
            <Text style={styles.footerText}>
              © {new Date().getFullYear()} Movers &amp; Packers in UAE. All
              rights reserved.
            </Text>
            <Text style={styles.footerMuted}>
              This is an automated notification email generated from your
              website contact form.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

// ─── Default props for preview ───────────────────────────────────────────────
MoversEmail.defaultProps = {
  formData: {
    name: "Ahmed Al Mansoori",
    phone: "+971 50 123 4567",
    movingFrom: "Dubai Marina, Dubai",
    movingTo: "Khalidiyah, Abu Dhabi",
    message:
      "I need to move a 2-bedroom apartment. Preferred dates are between 10–15 May. Please include packing services.",
  },
};

export default MoversEmail;

// ─── Styles ──────────────────────────────────────────────────────────────────
const BRAND = {
  primary: "#c10007",
  secondary: "#222a35",
  text: "#666666",
  white: "#ffffff",
  bg: "#f5f5f5",
  border: "#e8e8e8",
  cardBg: "#fafafa",
};

const styles: Record<string, React.CSSProperties> = {
  body: {
    backgroundColor: BRAND.bg,
    fontFamily: "'DM Sans', Helvetica, Arial, sans-serif",
    margin: 0,
    padding: "32px 0",
  },

  outerContainer: {
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor: BRAND.white,
    borderRadius: "4px",
    overflow: "hidden",
    boxShadow: "0 1px 3px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.06)",
  },

  // ── Header ──
  header: {
    backgroundColor: BRAND.secondary,
    padding: "24px 36px",
  },
  logo: {
    display: "block",
  },
  headerLabel: {
    color: "rgba(255,255,255,0.45)",
    fontSize: "11px",
    fontWeight: "500",
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    margin: 0,
    lineHeight: "40px",
  },

  // ── Accent bar ──
  accentBar: {
    backgroundColor: BRAND.primary,
    height: "3px",
    padding: 0,
    margin: 0,
    lineHeight: "3px",
  },

  // ── Hero ──
  heroSection: {
    padding: "40px 36px 32px",
    borderBottom: `1px solid ${BRAND.border}`,
  },
  heroEyebrow: {
    color: BRAND.primary,
    fontSize: "11px",
    fontWeight: "600",
    letterSpacing: "0.15em",
    margin: "0 0 12px",
  },
  heroHeading: {
    color: BRAND.secondary,
    fontSize: "30px",
    fontWeight: "600",
    lineHeight: "1.2",
    margin: "0 0 8px",
    fontFamily: "'DM Serif Display', Georgia, serif",
  },
  heroSub: {
    color: BRAND.text,
    fontSize: "13px",
    margin: 0,
    lineHeight: "1.5",
  },

  // ── Route card ──
  routeCard: {
    backgroundColor: BRAND.secondary,
    padding: "28px 36px",
    margin: 0,
  },
  routeCol: {
    width: "42%",
  },
  arrowCol: {
    width: "16%",
    textAlign: "center" as const,
  },
  routeLabel: {
    color: "rgba(255,255,255,0.4)",
    fontSize: "10px",
    fontWeight: "600",
    letterSpacing: "0.14em",
    margin: "0 0 6px",
  },
  routeValue: {
    color: BRAND.white,
    fontSize: "15px",
    fontWeight: "500",
    margin: 0,
    lineHeight: "1.4",
  },
  arrow: {
    color: BRAND.primary,
    fontSize: "22px",
    fontWeight: "300",
    margin: "16px 0 0",
    lineHeight: "1",
    display: "block",
  },

  // ── Details ──
  detailsSection: {
    padding: "32px 36px 24px",
    borderBottom: `1px solid ${BRAND.border}`,
  },
  sectionHeading: {
    color: BRAND.secondary,
    fontSize: "13px",
    fontWeight: "600",
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    margin: "0 0 16px",
  },
  divider: {
    borderTop: `2px solid ${BRAND.secondary}`,
    borderBottom: "none",
    margin: "0 0 0",
  },
  detailRow: {
    padding: "14px 0",
  },
  rowDivider: {
    borderTop: `1px solid ${BRAND.border}`,
    borderBottom: "none",
    margin: 0,
  },
  detailLabelCol: {
    width: "38%",
  },
  detailLabel: {
    color: BRAND.text,
    fontSize: "12px",
    fontWeight: "500",
    margin: 0,
    lineHeight: "1.5",
  },
  detailValueCol: {
    width: "62%",
  },
  detailValue: {
    color: BRAND.secondary,
    fontSize: "14px",
    fontWeight: "500",
    margin: 0,
    lineHeight: "1.5",
  },

  // ── Message ──
  messageSection: {
    padding: "32px 36px 24px",
    borderBottom: `1px solid ${BRAND.border}`,
  },
  messageText: {
    color: BRAND.text,
    fontSize: "14px",
    lineHeight: "1.75",
    margin: "16px 0 0",
    padding: "20px",
    backgroundColor: BRAND.cardBg,
    borderLeft: `3px solid ${BRAND.primary}`,
    borderRadius: "0 2px 2px 0",
  },

  // ── CTA strip ──
  ctaStrip: {
    backgroundColor: "#fff8f8",
    borderTop: `1px solid #fce4e4`,
    borderBottom: `1px solid #fce4e4`,
    padding: "20px 36px",
  },
  ctaLabel: {
    color: BRAND.primary,
    fontSize: "10px",
    fontWeight: "600",
    letterSpacing: "0.14em",
    margin: "0 0 4px",
  },
  ctaText: {
    color: BRAND.text,
    fontSize: "13px",
    margin: 0,
    lineHeight: "1.5",
  },
  ctaBadge: {
    display: "inline-block",
    backgroundColor: BRAND.primary,
    color: BRAND.white,
    fontSize: "11px",
    fontWeight: "600",
    padding: "6px 12px",
    borderRadius: "2px",
    letterSpacing: "0.03em",
    whiteSpace: "nowrap" as const,
    margin: "8px 0 0",
  },

  // ── Footer ──
  footer: {
    backgroundColor: BRAND.secondary,
    padding: "28px 36px",
  },
  footerText: {
    color: "rgba(255,255,255,0.5)",
    fontSize: "12px",
    margin: "12px 0 4px",
    lineHeight: "1.5",
  },
  footerMuted: {
    color: "rgba(255,255,255,0.3)",
    fontSize: "11px",
    margin: 0,
    lineHeight: "1.5",
  },
};
