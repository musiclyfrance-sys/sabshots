// Shared page hero, styled identically to the homepage hero header
// (same dot-grid, same spinning aperture icon, same badge/title/subtitle and
// spacing) so there is no visual shock when navigating between pages.
export default function PageHero({
  badge,
  title,
  subtitle,
}: {
  badge: string
  title: string
  subtitle: string
}) {
  return (
    <section
      style={{
        position: 'relative',
        margin: 'clamp(84px, 14vw, 116px) 0 clamp(48px, 9vw, 90px)',
        padding: '12px',
        fontFamily: 'Manrope, sans-serif',
        color: 'rgb(1, 1, 1)',
        fontSize: '16px',
      }}
    >
      {/* padding-global */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '8px',
        }}
      >
        {/* container-medium */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 'clamp(20px, 5vw, 50px)',
            width: '100%',
            maxWidth: '1000px',
            borderRadius: '40px',
            padding: '8px',
            position: 'relative',
          }}
        >
          {/* Dot-grid background overlay (identical to homepage) */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '40px',
              backgroundImage:
                'radial-gradient(circle, rgba(1,1,1,0.12) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />

          {/* Camera aperture icon — continuous spin (the brand mark) */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgb(1, 1, 1)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="spin-icon"
              style={{ display: 'block', animation: 'iconSpin 6s linear infinite' }}
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M14.31 8l5.74 9.94" />
              <path d="M9.69 8h11.48" />
              <path d="M7.38 12l5.74-9.94" />
              <path d="M9.69 16L3.95 6.06" />
              <path d="M14.31 16H2.83" />
              <path d="M16.62 12l-5.74 9.94" />
            </svg>
          </div>

          {/* section-title */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '14px',
              maxWidth: '984px',
              textAlign: 'center',
              position: 'relative',
            }}
          >
            {/* Badge */}
            <div
              style={{
                display: 'flex',
                backgroundColor: 'rgb(255, 255, 255)',
                padding: '4px 12px',
                borderRadius: '26px',
                height: '30px',
                alignItems: 'center',
              }}
            >
              <span
                style={{
                  fontSize: '14px',
                  fontWeight: 300,
                  color: 'rgb(1, 1, 1)',
                  lineHeight: '22px',
                  whiteSpace: 'nowrap',
                }}
              >
                {badge}
              </span>
            </div>

            {/* Heading + Paragraph */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <h1
                style={{
                  fontSize: 'clamp(34px, 8vw, 52px)',
                  fontWeight: 500,
                  lineHeight: '1.15',
                  color: 'rgb(1, 1, 1)',
                  textAlign: 'center',
                  fontFamily: 'Manrope, sans-serif',
                  margin: 0,
                }}
              >
                {title}
              </h1>
              <p
                style={{
                  fontSize: '18px',
                  fontWeight: 400,
                  lineHeight: '25px',
                  color: 'rgb(124, 124, 124)',
                  textAlign: 'center',
                  fontFamily: 'Manrope, sans-serif',
                  margin: 0,
                  maxWidth: '450px',
                }}
              >
                {subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
