import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";
import { cn } from "@/lib/utils";

type VolunteerExperience = (typeof RESUME_DATA)["volunteer"][number];
type VolunteerBadges = readonly string[];

interface BadgeListProps {
  className?: string;
  badges: VolunteerBadges;
}

/**
 * Renders a list of badges for Volunteer experience
 * Handles both mobile and desktop layouts through className prop
 */
function BadgeList({ className, badges }: BadgeListProps) {
  if (badges.length === 0) return null;

  return (
    <ul
      className={cn("inline-flex list-none gap-x-1 p-0", className)}
      aria-label="Technologies used"
    >
      {badges.map((badge) => (
        <li key={badge}>
          <Badge
            variant="secondary"
            className="align-middle text-xs print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
          >
            {badge}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

interface VolunteerPeriodProps {
  start: VolunteerExperience["start"];
  end?: VolunteerExperience["end"];
}

/**
 * Displays the Volunteer period in a consistent format
 */
function VolunteerPeriod({ start, end }: VolunteerPeriodProps) {
  return (
    <div
      className="text-sm tabular-nums text-gray-500"
      aria-label={`Employment period: ${start} to ${end ?? "Present"}`}
    >
      {start} - {end ?? "Present"}
    </div>
  );
}

interface CompanyLinkProps {
  company: VolunteerExperience["company"];
  link: VolunteerExperience["link"];
}

/**
 * Renders company name with optional link
 */
function CompanyLink({ company, link }: CompanyLinkProps) {
  return (
    <a
      className="hover:underline"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${company} company website`}
    >
      {company}
    </a>
  );
}

interface VolunteerExperienceItemProps {
  volunteer: VolunteerExperience;
}

/**
 * Individual Volunteer experience card component
 * Handles responsive layout for badges (mobile/desktop)
 */
function VolunteerExperienceItem({ volunteer }: VolunteerExperienceItemProps) {
  const { company, link, badges, title, start, end, description } = volunteer;

  return (
    <Card className="py-1 print:py-0">
      <CardHeader className="print:space-y-1">
        <div className="flex items-center justify-between gap-x-2 text-base">
          <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none print:text-sm">
            <CompanyLink company={company} link={link} />
            <BadgeList
              className="hidden gap-x-1 sm:inline-flex"
              badges={badges}
            />
          </h3>
          <VolunteerPeriod start={start} end={end} />
        </div>

        <h4 className="font-mono text-sm font-semibold leading-none print:text-[12px]">
          {title}
        </h4>
      </CardHeader>

      <CardContent>
        <div className="mt-2 text-xs text-foreground/80 print:mt-1 print:text-[10px] text-pretty">
          {description}
        </div>
        <div className="mt-2">
          <BadgeList
            className="-mx-2 flex-wrap gap-1 sm:hidden"
            badges={badges}
          />
        </div>
      </CardContent>
    </Card>
  );
}

interface VolunteerExperienceProps {
  volunteer: (typeof RESUME_DATA)["volunteer"];
}

/**
 * Main Volunteer experience section component
 * Renders a list of Volunteer experiences in chronological order
 */
export function VolunteerExperience({ volunteer }: VolunteerExperienceProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold" id="Volunteer-experience">
        Volunteer Experience
      </h2>
      <div className="space-y-4 print:space-y-0" role="feed" aria-labelledby="Volunteer-experience">
        {volunteer.map((item) => (
          <article key={`${item.company}-${item.start}`} role="article">
            <VolunteerExperienceItem volunteer={item} />
          </article>
        ))}
      </div>
    </Section>
  );
}
