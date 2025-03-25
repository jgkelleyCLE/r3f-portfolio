import ContactCanvas from '@/Components/Contact/ContactCanvas';
import ContactForm from '@/Components/Contact/ContactForm';
import { ContentContainer, FlexRow, PageContainer, PageHeader } from '@/Components/UI';
import React, { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    document.title = 'Jack Kelley | Contact Me';
  }, []);

  return (
    <PageContainer>
      <ContentContainer>
        <PageHeader>Contact Me</PageHeader>
        <p className="-mt-2 italic">john.gerard.kelley@gmail.com</p>

        <FlexRow className="w-full flex flex-col md:flex-row md:gap-4">
          {/* LEFT SIDE */}
          <div className="w-full md:w-1/2 h-1/4 md:h-[500px]">
            <ContactCanvas />
          </div>

          {/* RIGHT SIDE  */}
          <div className="w-full md:w-1/2 h-3/4 md:h-[500px]">
            <ContactForm />
          </div>
        </FlexRow>
      </ContentContainer>
    </PageContainer>
  );
};

export default Contact;
