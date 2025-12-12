# Migration Report: Telemed → Vietinnotech

**Date:** December 12, 2025

## Summary
Successfully migrated the entire website from "Telemed/TelemedVN" branding to "Vietinnotech".

## Files Modified

### Configuration Files
- ✅ `package.json` - Changed name from "telemedvn-web" to "vietinnotech-web"
- ✅ `index.html` - Updated title from "TelemedVN" to "Vietinnotech"
- ✅ `public/favicon/site.webmanifest` - Updated name and short_name
- ✅ `deploy/nginx/nginx.conf` - Updated server_name from telemed.vn to vietinnotech.vn

### Component Files
- ✅ `src/components/Header/Header.tsx` - Updated all product names and alt text
- ✅ `src/components/Footer/Footer.tsx` - Updated company name, email, slogan, copyright, and social links
- ✅ `src/components/Overview/Overview.tsx` - Updated all company references in mission statements
- ✅ `src/components/Product/Product.tsx` - Updated product descriptions and company references

### Page Files
- ✅ `src/pages/VietinnotechRIS.tsx` (renamed from TelemedRIS.tsx)
- ✅ `src/pages/VietinnotechPACS.tsx` (renamed from TelemedPACS.tsx)
- ✅ `src/pages/VietinnotechPatientPortal.tsx` (renamed from TelemedPatientPortal.tsx)
- ✅ `src/pages/SanPham.tsx` - Updated product card titles
- ✅ `src/router.tsx` - Updated all imports to use new component names

## Branding Changes

### Email
- Before: admin@telemed.vn
- After: admin@vietinnotech.vn

### Social Links
- Before: facebook.com/TELEMED.JSC
- After: facebook.com/Vietinnotech

### Product Names
- Telemed RIS → Vietinnotech RIS
- Telemed Patient Portal → Vietinnotech Patient Portal
- Telemed PACS Server → Vietinnotech PACS Server
- Telemed ND → Vietinnotech ND

### Company References
All mission statements, descriptions, and copyright notices now reference "Vietinnotech" instead of "Telemed".

## Preserved Elements

The following were intentionally preserved:
- URL routes still use "telemed-*" paths (for backward compatibility)
- "Telemedicine" product name (separate product)
- Catalog PDF filenames (no need to rename)

## Next Steps

1. Rebuild the project:
   ```bash
   npm install
   npm run build
   ```

2. Test all product pages to ensure links work correctly

3. Update any external documentation or deployment scripts

4. Deploy to production

## Notes

- No database migrations required (static website)
- All TypeScript types remain valid
- No breaking changes to component APIs
