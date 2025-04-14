import React, { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { useToast } from "@/hooks/use-toast";

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const formProps = Object.fromEntries(formData);
      
      const response = await fetch("https://submit-form.com/M9Gj9sk5q", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formProps),
      });
      
      if (response.ok) {
        setFormSubmitted(true);
        e.currentTarget.reset();
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Get In Touch" 
          subtitle="Have a project in mind or just want to say hello? Feel free to reach out to me."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="card p-6 md:p-8">
            <h3 className="text-xl font-bold text-navy mb-6">Contact Information</h3>
            <p className="text-gray-600 mb-8">
              Feel free to reach out to me through any of the following channels. 
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-navy/10 rounded-full">
                  <Mail className="text-navy" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-navy">Email</h4>
                  <a href="mailto:hariudayana2002@gmail.com" className="text-gray-600 hover:text-navy">
                    hariudayana2002@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-navy/10 rounded-full">
                  <Phone className="text-navy" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-navy">Phone</h4>
                  <a href="tel:8978956673" className="text-gray-600 hover:text-navy">
                    8978956673
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-navy/10 rounded-full">
                  <MapPin className="text-navy" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-navy">Location</h4>
                  <p className="text-gray-600">
                    Vizianagaram, Andhra Pradesh
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card p-6 md:p-8">
            <h3 className="text-xl font-bold text-navy mb-6">Send Me a Message</h3>
            
            {formSubmitted ? (
              <div className="bg-green-50 p-6 rounded-lg border border-green-200 text-center">
                <div className="flex justify-center mb-4">
                  <CheckCircle className="h-12 w-12 text-green-500" />
                </div>
                <h4 className="text-xl font-medium text-green-800 mb-2">Thank You!</h4>
                <p className="text-green-700">Your message has been sent successfully. I'll get back to you as soon as possible!</p>
                <Button 
                  className="mt-6 bg-navy hover:bg-navy-light" 
                  onClick={() => setFormSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    required 
                    className="contact-input"
                  />
                </div>
                
                <div>
                  <Input 
                    type="email" 
                    name="email" 
                    placeholder="Your Email" 
                    required 
                    className="contact-input"
                  />
                </div>
                
                <div>
                  <Input 
                    type="text" 
                    name="subject" 
                    placeholder="Subject" 
                    className="contact-input"
                  />
                </div>
                
                <div>
                  <Textarea 
                    name="message" 
                    placeholder="Your Message" 
                    required 
                    className="contact-input min-h-[150px] resize-y"
                  />
                </div>
                
                <div>
                  <Button 
                    type="submit" 
                    className="btn-primary w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
