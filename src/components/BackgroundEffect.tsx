/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function BackgroundEffect() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-[#FAF9F8]">
      {/* Soft moving gradient mesh */}
      <div 
        className="absolute inset-0 opacity-40 mix-blend-multiply filter blur-[120px]"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #6366F1 0%, #FB7185 45%, #EDE9FE 100%)',
          animation: 'blob 25s ease-in-out infinite alternate',
        }}
      />
      
      {/* Floating blurred blob 1 - Green theme */}
      <div 
        className="absolute top-1/4 -left-12 w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-brand-primary/6 opacity-8 mix-blend-multiply filter blur-[80px] md:blur-[120px]"
        style={{
          animation: 'blob 18s ease-in-out infinite alternate',
        }}
      />

      {/* Floating blurred blob 2 - Teal theme */}
      <div 
        className="absolute bottom-1/4 -right-12 w-[350px] md:w-[550px] h-[350px] md:h-[550px] rounded-full bg-brand-accent/5 opacity-8 mix-blend-multiply filter blur-[80px] md:blur-[120px]"
        style={{
          animation: 'blob 22s ease-in-out infinite alternate-reverse',
        }}
      />

      {/* Floating blurred blob 3 - Warm beige helper */}
      <div 
        className="absolute top-1/2 left-1/3 w-[300px] md:w-[450px] h-[300px] md:h-[450px] rounded-full bg-brand-warm/30 opacity-20 mix-blend-overlay filter blur-[100px]"
        style={{
          animation: 'blob 16s ease-in-out infinite alternate 2s',
        }}
      />
    </div>
  );
}
